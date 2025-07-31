---
applicable: Skype for Business Online
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: SkypeForBusiness
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/skype/set-csuserpstnsettings
schema: 2.0.0
title: Set-CsUserPstnSettings
---

# Set-CsUserPstnSettings

## SYNOPSIS
Use the `Set-CsUserPstnSettings` cmdlet to modify an existing voice-enabled user's public switched telephone network (PSTN) settings.

**Note**: This cmdlet will be deprecated from Teams PowerShell Module.

## SYNTAX

```
Set-CsUserPstnSettings [-AllowInternationalCalls <Boolean>] [-HybridPSTNSite <String>]
 [-Identity] <UserIdParameter> [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Hybrid PSTN sites are created, retrieved, modified and deleted by the CsHybridPSTNSite cmdlet group (New, Get, Set and Remove). The hybrid PSTN sites can be reviewed in your hybrid configuration by using the `Get-CsTenantHybridConfiguration` cmdlet.
However, you can't create or modify hybrid PSTN sites through the CsTenantHybridConfiguration cmdlets, you must use the CsHybridPSTNSite cmdlets to manage hybrid PSTN sites.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### Example 1
```
Set-CsUserPstnSettings -Identity jphillips@contoso.com -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" -AllowInternationalCalls $true
```

This example modifies the specified user's PSTN settings to allow international calls.


## PARAMETERS

### -AllowInternationalCalls

> Applicable: Skype for Business Online

If set to $true, the user is enabled for international calls.
If $false, international calls are not enabled.
The default is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HybridPSTNSite

> Applicable: Skype for Business Online

Specifies the identity (name) of the hybrid public switched telephone network (PSTN) site that provides PSTN services for the user.
Set HybridPSTNSite to $null to revert to the default PSTN site.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Skype for Business Online

Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Skype for Business Online

Specifies the global unique identifier (GUID) of the Skype for Business Online tenant account on which the cmdlet will operate.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`.

You can find the tenant ID for your Skype for Business Online tenants by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter.
Instead, the tenant ID will be determined by your connection and credentials.
The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Online

The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -WhatIf

> Applicable: Skype for Business Online

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.UserPstnSettings
The `Set-CsUserPstnSettings` cmdlet returns instances of the UserPstnSettings object.

## NOTES

## RELATED LINKS
