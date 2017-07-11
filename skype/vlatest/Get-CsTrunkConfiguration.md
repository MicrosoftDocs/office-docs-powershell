---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrunkConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves one or more trunk configurations, which describe the settings for a trunking peer entity such as a public switched telephone network (PSTN) gateway, IP-private branch exchange (PBX), or Session Border Controller (SBC) at the service provider.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Use this cmdlet to retrieve one or more trunking configurations applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrunkConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrunkConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to retrieve one or more trunking configurations applicable to PSTN gateway entities.
Each configuration contains specific settings for a trunking peer entity such as a PSTN gateway, IP-PBX, or SBC at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTrunkConfiguration
```

This example retrieves all trunk configurations for the Microsoft Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves all trunk configurations for the Lync Server deployment.

Get-CsTrunkConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all trunk configurations for the Skype for Business Server 2015 deployment.

Get-CsTrunkConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrunkConfiguration -Identity site:Redmond
```

This example retrieves the trunk configuration with the Identity site:Redmond.
Because identities are unique, this command will return at most one object.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example retrieves the trunk configuration with the Identity site:Redmond.
Because identities are unique, this command will return at most one object.

Get-CsTrunkConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves the trunk configuration with the Identity site:Redmond.
Because identities are unique, this command will return at most one object.

Get-CsTrunkConfiguration -Identity site:Redmond

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTrunkConfiguration -Filter site:*
```

Example 3 retrieves all trunk configurations defined at the site level.
The Get-CsTrunkConfiguration cmdlet uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site:, meaning all trunk configurations defined at the site level.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 retrieves all trunk configurations defined at the site level.
The Get-CsTrunkConfiguration cmdlet uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site:, meaning all trunk configurations defined at the site level.

Get-CsTrunkConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 retrieves all trunk configurations defined at the site level.
The Get-CsTrunkConfiguration cmdlet uses the Filter parameter to retrieve all trunk configurations with an Identity beginning with site:, meaning all trunk configurations defined at the site level.

Get-CsTrunkConfiguration -Filter site:*

## PARAMETERS

### -Identity
The unique identifier of the trunk configuration you want to retrieve.
Trunk configurations can be defined at the Global scope, the Site scope, or at the Service scope for a PSTN Gateway service.
For example, site:Redmond (for site) or PstnGateway:Redmond.litwareinc.com (for service).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Retrieves the trunk configuration from the local replica of the Central Management store, rather than the Central Management store itself.



**Below Content Applies To:** Skype for Business Server 2015

Retrieves the information from the local replica of the Central Management store, rather than the Central Management store itself.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet returns an object of type Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/15951113-5f96-4f44-8cad-9ff97fb5dfd6(OCS.14).aspx)

[New-CsTrunkConfiguration]()

[Remove-CsTrunkConfiguration]()

[Set-CsTrunkConfiguration]()

[Test-CsTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/15951113-5f96-4f44-8cad-9ff97fb5dfd6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/15951113-5f96-4f44-8cad-9ff97fb5dfd6(OCS.16).aspx)

