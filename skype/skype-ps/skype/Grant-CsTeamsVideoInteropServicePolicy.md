---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/grant-csteamsvideointeropservicepolicy
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Grant-CsTeamsVideoInteropServicePolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Grant-CsTeamsVideoInteropServicePolicy

## SYNOPSIS

Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.

## SYNTAX

### Identity (Default)
```
Grant-CsTeamsVideoInteropServicePolicy [[-Identity] <UserIdParameter>] [-PolicyName] <String>
 [-Tenant <System.Guid>] [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### GrantToTenant
```
Grant-CsTeamsVideoInteropServicePolicy [-PolicyName] <String> [-Tenant <System.Guid>]
 [-DomainController <Fqdn>] [-PassThru] [-Global] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings.  You can use the TeamsVideoInteropServicePolicy cmdlets to enable Cloud Video Interop for particular users or for your entire organization.  Microsoft provides pre-constructed policies for each of our supported partners that allow you to designate which of the partners to use for cloud video interop.  

The Grant-CsTeamsVideoInteropServicePolicy cmdlet allows you to assign a pre-constructed policy across your whole organization or only  to specific users.

User needs to be assigned one policy from admin to create a CVI meeting. There could be multiple provides in a tenant, but user can only be assigned only one policy(provide).

**FAQ:**

*
    Q: After running ***Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy>*** to assign a policy to the whole tenant, the result of ***Get-CsOnlineUser -Identity {User Identity} | fl TeamsVideoInteropServicePolicy*** that checking the User Policy is empty.

    A: Global/Tenant level Policy Assignment can be checked by
    ***Get-CsTeamsVideoInteropServicePolicy Global***

*
    Q: I assigned CVI policy to a user, but cannot create a VTC meeting with that policy.

    Q: I made changes to policy assignment, but it didn't reflect on new meetings I created.

    A: The policy get cached for 6 hours, changes to policy will get updated after cache expires. Please make sure check your changes after 6 hours.


## EXAMPLES

### Example 1: The whole tenant has the same provider

In tenant remote PS, run following cmdlet.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy>
```
To remove the tenant level provider and let the whole tenant fallback to Global policy, run following cmdlet.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName $null
```

### Example 2: The tenant has two (or three) interop service provider

Identify which users are associated with Provider-1 or Provider-2.
Run following cmdlet for each of the users with provider1 or provider2 in the PolicyName.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy> -Identity <UserId>
```
To remove the provider to a user and let it fall back to Global policy, run following cmdlet.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName $null -Identity <UserId>
```

### Example 3: The tenant has a default Interop service provider for all of its tenant, but specific users (say IT folks) want to pilot out another interop provider.

In tenant remote PS, run following cmdlet.
```powershell
Grant-CsTeamsVideoInteropServicePolicy  -PolicyName <Identity of the Policy (Provider-1)>
```
For the specific users trying out Provider-2, run following cmdlet for each of the users with provider1 or provider2 in the PolicyName.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName <Identity of the Policy (Provider-2)> -Identity <UserId>
```
For the specific users need to disable CVI feature, run following cmdlet for each of the users.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName ServiceProviderDisabled -Identity <UserId>
```

### Example 4: Cloud Video Interop has been disabled for the entire tenant, except for those users that have an explicit policy assigned to them.

In tenant remote PS, run following cmdlet.
```powershell
Grant-CsTeamsVideoInteropServicePolicy -PolicyName ServiceProviderDisabled
```

### Frequently used cmdlets that can help identity policy assignment:

1. Cmdlet to get full list of user along with their CVI policy:
    ```powershell
    Get-CsOnlineUser | fl UserPrincipalName,TeamsVideoInteropServicePolicy
    ```

2. Cmdlet to get the policy assigned to the whole tenant:
    ```powershell
    Get-CsTeamsVideoInteropServicePolicy Global
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
