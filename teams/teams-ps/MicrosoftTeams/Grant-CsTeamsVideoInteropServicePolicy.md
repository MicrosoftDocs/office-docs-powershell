---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamsvideointeropservicepolicy
schema: 2.0.0
title: Grant-CsTeamsVideoInteropServicePolicy
---

# Grant-CsTeamsVideoInteropServicePolicy

## SYNOPSIS
The Grant-CsTeamsVideoInteropServicePolicy cmdlet allows you to assign a pre-constructed policy across your whole organization or only to specific users.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsVideoInteropServicePolicy [[-Identity] <String>] [-PassThru] [[-PolicyName] <String>]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsVideoInteropServicePolicy [-PassThru] [[-PolicyName] <String>]
 [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToGroup
```
Grant-CsTeamsVideoInteropServicePolicy [-PassThru] [[-PolicyName] <String>]
 -Group <String> [-Rank <Int32>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.  Microsoft provides pre-constructed policies for each of our supported partners that allow you to designate which of the partners to use for cloud video interop.

User needs to be assigned one policy from admin to create a CVI meeting. There could be multiple provides in a tenant, but user can only be assigned only one policy(provide).

**FAQ**:

Q: After running `Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy>` to assign a policy to the whole tenant, the result of `Get-CsOnlineUser -Identity {User Identity} | Format-List TeamsVideoInteropServicePolicy` that checks if the User Policy is empty.

A: Global/Tenant level Policy Assignment can be checked by running `Get-CsTeamsVideoInteropServicePolicy Global`.

Q: I assigned CVI policy to a user, but I can't create a VTC meeting with that policy or I made changes to policy assignment, but it didn't reflect on new meetings I created.

A: The policy is cached for 6 hours. Changes to the policy are updated after the cache expires. Check for your changes after 6 hours.

**Frequently used commands that can help identify the policy assignment**:

- Command to get full list of user along with their CVI policy: `Get-CsOnlineUser | Format-List UserPrincipalName,TeamsVideoInteropServicePolicy`

- Command to get the policy assigned to the whole tenant: `Get-CsTeamsVideoInteropServicePolicy Global`

## EXAMPLES

### Example 1: The whole tenant has the same provider

```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy | $null> -Global
```

Specify the provider for the whole tenant or use the value $null to remove the tenant-level provider and let the whole tenant fall back to the Global policy.

### Example 2: The tenant has two (or three) interop service providers

```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy | $null> -Identity <UserId>
```

Specify each user with the Identity parameter, and use Provider-1 or Provider-2 for the value of the PolicyName parameter. Use the value $null to remove the provider and let the user's provider fallback to Global policy.

### Example 3: The tenant has a default interop service provider, but specific users (say IT folks) want to pilot another interop provider.

```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy | ServiceProviderDisabled> [-Identity <UserId>]
```

- To assign Provider-1 as the default interop service provider, don't use the Identity parameter and use the value Provider-1 for the PolicyName parameter.

- For specific users to try Provider-2, specify each user with the Identity parameter, and use the value Provider-2 for the PolicyName parameter.

- For specific users who need to disable CVI, specify each user with the Identity parameter and use the value ServiceProviderDisabled for the PolicyName parameter.

### Example 4: Cloud Video Interop has been disabled for the entire tenant, except for those users that have an explicit policy assigned to them.

```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName ServiceProviderDisabled
```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Internal Microsoft use only.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Use this flag to override the warning when assigning the global policy for your tenant.

```yaml
Type: SwitchParameter
Parameter Sets: GrantToTenant
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: GrantToGroup
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: UserIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsVideoInteropServicePolicy cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Specify the pre-constructed policy that you would like to assign to your tenant or a particular user.  You can get the policies available for your organization using the cmdlet Get-CsTeamsVideoInteropServicePolicy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: GrantToGroup
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use only.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
