---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinedirectorytenant
applicable: Microsoft Teams
title: Get-CsOnlineDirectoryTenant
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsOnlineDirectoryTenant

## SYNOPSIS
Use the Get-CsOnlineDirectoryTenant cmdlet to retrieve a tenant and associated parameters from the Business Voice Directory.

## SYNTAX
```
Get-CsOnlineDirectoryTenant [[-Tenant] <Guid>] [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Note**: Starting with Teams PowerShell Module 4.0, this cmdlet will be deprecated. Use the Get-CsTenant or Get-CsOnlineDialInConferencingBridge cmdlet to view information previously present in Get-CsOnlineDirectoryTenant.

Use the Get-CsOnlineDirectoryTenant cmdlet to retrieve tenant parameters like AnnouncementsDisabled, NameRecordingDisabled and Bridges from the Business Voice Directory.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineDirectoryTenant -Tenant 7a205197-8e59-487d-b9fa-3fc1b108f1e5
```

This example returns the tenant specified by GUID.

## PARAMETERS

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter are either the fully qualified domain name (FQDN) or the computer name.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can find your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Deserialized.Microsoft.Rtc.Management.Hosted.Bvd.Types.LacTenant

## NOTES

## RELATED LINKS

[Get-CsOnlineTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumber)
