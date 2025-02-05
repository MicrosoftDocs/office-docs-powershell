---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceapplicationinstance
applicable: Microsoft Teams
title: Set-CsOnlineVoiceApplicationInstance
ms.reviewer:
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
---

# Set-CsOnlineVoiceApplicationInstance

## SYNOPSIS
The `Set-CsOnlineVoiceApplicationInstance` modifies an application instance in Microsoft Entra ID.

**Note**: This cmdlet has been deprecated. Use the new [Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment) and
[Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment) cmdlets instead.

## SYNTAX
```
Set-CsOnlineVoiceApplicationInstance [[-Identity] <String>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-TelephoneNumber <String>]
 [-Tenant <Guid>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to modify an application instance in Microsoft Entra ID.

## EXAMPLES

### Example 1
```powershell
Set-CsOnlineVoiceApplicationInstance -Identity testra1@contoso.com -TelephoneNumber +14255550100
```

This example sets a phone number to the resource account testra1@contoso.com.

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
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity
The user principal name (UPN) of the resource account in Microsoft Entra ID.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
The phone number to be assigned to the resource account.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose external user communication policy are being created. For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return your tenant ID by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

If you are using a remote session of Windows PowerShell and are connected only to Skype for Business Online you do not have to include the Tenant parameter. Instead, the tenant ID will automatically be filled in for you based on your connection information. The Tenant parameter is primarily for use in a hybrid deployment.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/teams/new-csonlineapplicationinstance)
