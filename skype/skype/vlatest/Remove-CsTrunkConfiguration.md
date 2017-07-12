---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsTrunkConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an existing trunk configuration that describes the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an existing trunk configuration that describes the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsTrunkConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Use this cmdlet to remove a trunking configuration applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Note that if you call Remove-CsTrunkConfiguration on the Global configuration, that trunk configuration will not be removed.
Instead the configuration will be "reset" and all custom settings will be replaced with default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrunkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the  Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrunkConfiguration"}

**Below Content Applies To:** Lync Server 2013

Use this cmdlet to remove a trunking configuration applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Note that if you call Remove-CsTrunkConfiguration on the Global configuration, that trunk configuration will not be removed.
Instead the configuration will be "reset" and all custom settings will be replaced with default values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsTrunkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsTrunkConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to remove a trunking configuration applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Note that if you call the Remove-CsTrunkConfiguration cmdlet on the Global configuration, that trunk configuration will not be removed.
Instead the configuration will be "reset" and all custom settings will be replaced with default values.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsTrunkConfiguration -Identity site:Redmond
```

This example removes the trunk configuration with the Identity site:Redmond.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the trunk configuration with the Identity site:Redmond.

Remove-CsTrunkConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the trunk configuration with the Identity site:Redmond.

Remove-CsTrunkConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrunkConfiguration -Filter site:* | Remove-CsTrunkConfiguration
```

Example 2 removes all trunk configurations defined at the site level.
The first part of the command is a call to the Get-CsTrunkConfiguration cmdlet that uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site: (that is, all trunk configurations defined at the site level).
This collection of configurations is then piped to the Remove-CsTrunkConfiguration cmdlet, which removes each object in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 removes all trunk configurations defined at the site level.
The first part of the command is a call to the Get-CsTrunkConfiguration cmdlet that uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site: (that is, all trunk configurations defined at the site level).
This collection of configurations is then piped to the Remove-CsTrunkConfiguration cmdlet, which removes each object in the collection.

Get-CsTrunkConfiguration -Filter site:* | Remove-CsTrunkConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 removes all trunk configurations defined at the site level.
The first part of the command is a call to the Get-CsTrunkConfiguration cmdlet that uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site: (that is, all trunk configurations defined at the site level).
This collection of configurations is then piped to the Remove-CsTrunkConfiguration cmdlet, which removes each object in the collection.

Get-CsTrunkConfiguration -Filter site:* | Remove-CsTrunkConfiguration

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

[Online Version](http://technet.microsoft.com/EN-US/library/45546534-1a18-4db2-be61-850bacf55a52(OCS.14).aspx)

[New-CsTrunkConfiguration]()

[Set-CsTrunkConfiguration]()

[Get-CsTrunkConfiguration]()

[Test-CsTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/45546534-1a18-4db2-be61-850bacf55a52(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/45546534-1a18-4db2-be61-850bacf55a52(OCS.16).aspx)

