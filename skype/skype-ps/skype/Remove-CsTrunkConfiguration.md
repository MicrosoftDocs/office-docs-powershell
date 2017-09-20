---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsTrunkConfiguration
schema: 2.0.0
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

### -------------------------- Example 1 ------------------------
```
Remove-CsTrunkConfiguration -Identity site:Redmond
```

This example removes the trunk configuration with the Identity site:Redmond.


### -------------------------- Example 2 ------------------------
```
Get-CsTrunkConfiguration -Filter site:* | Remove-CsTrunkConfiguration
```

Example 2 removes all trunk configurations defined at the site level.
The first part of the command is a call to the `Get-CsTrunkConfiguration` cmdlet that uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site: (that is, all trunk configurations defined at the site level).
This collection of configurations is then piped to the `Remove-CsTrunkConfiguration` cmdlet, which removes each object in the collection.


## PARAMETERS

### -Identity
The unique identifier of the trunk configuration you want to remove.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration object.
Accepts pipelined input of trunk configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration.

## NOTES

## RELATED LINKS

[New-CsTrunkConfiguration]()

[Set-CsTrunkConfiguration]()

[Get-CsTrunkConfiguration]()

[Test-CsTrunkConfiguration]()
