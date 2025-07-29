---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-cstrunkconfiguration
schema: 2.0.0
title: Remove-CsTrunkConfiguration
---

# Remove-CsTrunkConfiguration

## SYNOPSIS
Removes an existing trunk configuration that describes the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsTrunkConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove a trunking configuration applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Note that if you call the `Remove-CsTrunkConfiguration` cmdlet on the Global configuration, that trunk configuration will not be removed.
Instead the configuration will be "reset" and all custom settings will be replaced with default values.


## EXAMPLES

### Example 1
```
Remove-CsTrunkConfiguration -Identity site:Redmond
```

This example removes the trunk configuration with the Identity site:Redmond.


### Example 2
```
Get-CsTrunkConfiguration -Filter site:* | Remove-CsTrunkConfiguration
```

Example 2 removes all trunk configurations defined at the site level.
The first part of the command is a call to the `Get-CsTrunkConfiguration` cmdlet that uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site: (that is, all trunk configurations defined at the site level).
This collection of configurations is then piped to the `Remove-CsTrunkConfiguration` cmdlet, which removes each object in the collection.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The unique identifier of the trunk configuration you want to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

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

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration

Accepts pipelined input of trunk configuration objects.

## OUTPUTS

### None
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration.

## NOTES

## RELATED LINKS

[New-CsTrunkConfiguration](New-CsTrunkConfiguration.md)

[Set-CsTrunkConfiguration](Set-CsTrunkConfiguration.md)

[Get-CsTrunkConfiguration](Get-CsTrunkConfiguration.md)

[Test-CsTrunkConfiguration](Test-CsTrunkConfiguration.md)
