---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkRegion

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves one or more network regions.
Network regions represent network hubs or backbones in an enterprise network.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves one or more network regions.
Network regions represent network hubs or backbones in an enterprise network.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkRegion [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkRegion [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A network region interconnects various parts of a network across multiple geographic areas.
Every network region must be associated with a central site.
Use this cmdlet to retrieve information about one or more network regions, including the associated central site and settings that determine whether alternate paths are allowed for audio and video connections, and that associate the sites within the region with a media bypass configuration.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkRegion cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkRegion"}

**Below Content Applies To:** Skype for Business Server 2015

A network region interconnects various parts of a network across multiple geographic areas.
Every network region must be associated with a central site.
Use this cmdlet to retrieve information about one or more network regions, including the associated central site and settings that determine whether alternate paths are allowed for audio and video connections, and that associate the sites within the region with a media bypass configuration.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegion
```

Example 1 retrieves all network regions defined for the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves all network regions defined for the organization.

Get-CsNetworkRegion

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves all network regions defined for the organization.

Get-CsNetworkRegion

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegion -Identity NorthAmerica
```

Example 2 retrieves the network regions with the Identity NorthAmerica.
Because identities are unique, this command retrieves at most one network region.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves the network regions with the Identity NorthAmerica.
Because identities are unique, this command retrieves at most one network region.

Get-CsNetworkRegion -Identity NorthAmerica

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves the network regions with the Identity NorthAmerica.
Because identities are unique, this command retrieves at most one network region.

Get-CsNetworkRegion -Identity NorthAmerica

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegion -Filter *America
```

This example retrieves all network regions with identities that end with the string America.
This would retrieve regions with identities such as NorthAmerica, SouthAmerica, and CentralAmerica.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example retrieves all network regions with identities that end with the string "America." This would retrieve regions with identities such as NorthAmerica, SouthAmerica, and CentralAmerica.

Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all network regions with identities that end with the string "America." This would retrieve regions with identities such as NorthAmerica, SouthAmerica, and CentralAmerica.

Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"}
```

This example retrieves all network regions associated with the central site Redmond.
The command begins by calling the Get-CsNetworkRegion cmdlet, with no parameters, to retrieve a collection of all network regions defined for the Microsoft Lync Server 2010 deployment.
This collection is then piped to the Where-Object cmdlet.
Where-Object filters this collection to return only those items (network regions) where the CentralSite value is equal to (-eq) site:Redmond.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This example retrieves all network regions associated with the central site Redmond.
The command begins by calling the Get-CsNetworkRegion cmdlet, with no parameters, to retrieve a collection of all network regions defined for the Lync Server deployment.
This collection is then piped to the Where-Object cmdlet.
Where-Object filters this collection to return only those items (network regions) where the CentralSite value is equal to (-eq) site:Redmond.

Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all network regions associated with the central site Redmond.
The command begins by calling the Get-CsNetworkRegion cmdlet, with no parameters, to retrieve a collection of all network regions defined for the Skype for Business Server 2015 deployment.
This collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet filters this collection to return only those items (network regions) where the CentralSite value is equal to (-eq) site:Redmond.

Get-CsNetworkRegion | Where-Object {$_.CentralSite -eq "site:Redmond"}

## PARAMETERS

### -Identity
The unique identifier of the network region you want to retrieve.
The Identity will be in the form of a string that uniquely identifies that region.
(Note that the Identity is the same as the NetworkRegionID.)

```yaml
Type: XdsGlobalRelativeIdentity
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
This parameter allows you to perform a wildcard search on the Identity of all network regions configured for the organization.
Use the wildcard character to filter on any part of the Identity.

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
Retrieves the network region information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Returns one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/5c9eef10-16c1-45f7-ae7b-2bee0965b421(OCS.14).aspx)

[New-CsNetworkRegion]()

[Remove-CsNetworkRegion]()

[Set-CsNetworkRegion]()

[Online Version](http://technet.microsoft.com/EN-US/library/5c9eef10-16c1-45f7-ae7b-2bee0965b421(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/5c9eef10-16c1-45f7-ae7b-2bee0965b421(OCS.16).aspx)

