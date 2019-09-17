---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
Module Name: Skype for Business Online
title: Set-CsVideoInteropServiceProvider
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsVideoInteropServiceProvider

## SYNOPSIS
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

## SYNTAX

### Identity (Default)
```
Set-CsVideoInteropServiceProvider [-Tenant <System.Guid>] [-AadApplicationIds <String>] [-TenantKey <String>]
 [-InstructionUri <String>] [-AllowAppGuestJoinsAsAuthenticated <Boolean>]
 [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsVideoInteropServiceProvider [-Tenant <System.Guid>] [-AadApplicationIds <String>] [-TenantKey <String>]
 [-InstructionUri <String>] [-AllowAppGuestJoinsAsAuthenticated <Boolean>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Cloud Video Interop for Teams enables 3rd party VTC devices to be able to join Teams meetings. The CsVideoInteropServiceProvider cmdlets allow you to designate provider/tenant specific information about the connection to the provider.

Use the Set-CsVideoInteropServiceProvider to update information about a supported CVI partner your organization uses.

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AadApplicationIds
This is an optional parameter. A semicolon separated list of AAD AppIds of the CVI partner bots can be specified in this parameter. This parameter works in conjunction with AllowAppGuestJoinsAsAuthenticated. When AllowAppGuestJoinsAsAuthenticated is set to true, a VTC device joining anonymously using any of these bots, is shown in the meeting as an authenticated tenant entity.

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

### -AllowAppGuestJoinsAsAuthenticated
This is an optional parameter. Default = false.
This parameter works in conjunction with AadApplicationIds. When AllowAppGuestJoinsAsAuthenticated is set to true, a VTC device joining anonymously using any of the bots AAD application ids specified in AadApplicationIds, is shown in the meeting as an authenticated tenant entity.

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

### -Force
Bypass all non-fatal errors.

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
Specify the VideoInteropServiceProvider to be updated.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Pass an existing provider from Get-CsVideoInteropServiceProvider to update (use instead of specifying "Identity")

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -InstructionUri
InstructionUri provides additional VTC dialin options. This field shows up in the Teams meeting when a CVI enabled user schedules a meeting. This TenantKey is used to dial into the partner's IVR for the partner CVI service. The partner will provide you this information when you sign up for CVI service through any of our partners

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

### -TenantKey
Tenantkey shows up in the Teams meeting when a CVI enabled user schedules a meeting. This TenantKey is used to dial into the partner's IVR for the partner CVI service. The partner will provide you this information when you sign up for CVI service through any of our partners.

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

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
