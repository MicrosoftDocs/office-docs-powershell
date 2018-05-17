---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsTrunkConfiguration
schema: 2.0.0
---

# Get-CsTrunkConfiguration

## SYNOPSIS
Retrieves one or more trunk configurations, which describe the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-private branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsTrunkConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTrunkConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to retrieve one or more trunking configurations applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTrunkConfiguration
```

This example retrieves all trunk configurations for the Skype for Business Server deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsTrunkConfiguration -Identity site:Redmond
```

This example retrieves the trunk configuration with the Identity site:Redmond.
Because identities are unique, this command will return at most one object.

### -------------------------- Example 3 --------------------------
```
Get-CsTrunkConfiguration -Filter site:*
```

Example 3 retrieves all trunk configurations defined at the site level.
The Get-CsTrunkConfiguration cmdlet uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site:, meaning all trunk configurations defined at the site level.


## PARAMETERS

### -Identity
The unique identifier of the trunk configuration you want to retrieve.
Trunk configurations can be defined at the Global scope, the Site scope, or at the Service scope for a PSTN Gateway service.
For example, site:Redmond (for site) or PstnGateway:Redmond.litwareinc.com (for service).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter accepts a wildcard string and returns all trunk configurations with identities matching that string.
For example, a Filter value of site:* will return all trunk configurations defined at the site level.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration


## NOTES


## RELATED LINKS

[New-CsTrunkConfiguration](New-CsTrunkConfiguration.md)

[Remove-CsTrunkConfiguration](Remove-CsTrunkConfiguration.md)

[Set-CsTrunkConfiguration](Set-CsTrunkConfiguration.md)

[Test-CsTrunkConfiguration](Test-CsTrunkConfiguration.md)

