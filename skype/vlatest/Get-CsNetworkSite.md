---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkSite

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves one or more network sites defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves one or more network sites defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkSite [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkSite [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet retrieves the settings for one or more existing sites.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkSite cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkSite"}

Below Content Applies To: Skype for Business Server 2015

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet retrieves the settings for one or more existing sites.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSite
```

Calling Get-CsNetworkSite with no parameters will return all network sites configured for CAC or E9-1-1 within the Microsoft Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Calling Get-CsNetworkSite with no parameters will return all network sites configured for CAC or E9-1-1 within the Lync Server deployment.

Get-CsNetworkSite

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Calling the Get-CsNetworkSite cmdlet with no parameters will return all network sites configured for CAC or E9-1-1 within the Skype for Business Server 2015 deployment.

Get-CsNetworkSite

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSite -Identity Redmond
```

This command retrieves the site with the Identity (and, by definition, the NetworkSiteID) Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This command retrieves the site with the Identity (and, by definition, the NetworkSiteID) Redmond.

Get-CsNetworkSite -Identity Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This command retrieves the site with the Identity (and, by definition, the NetworkSiteID) Redmond.

Get-CsNetworkSite -Identity Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSite -Filter NA*
```

The command in Example 3 calls Get-CsNetworkSite with the Filter parameter.
The value of the Filter parameter is NA*, meaning that this command will retrieve all sites with an Identity beginning with the string NA and followed by any number of characters.
This will return sites such as NARedmond, NAVancouver, and NAChicago.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command in Example 3 calls Get-CsNetworkSite with the Filter parameter.
The value of the Filter parameter is NA*, meaning that this command will retrieve all sites with an Identity beginning with the string NA and followed by any number of characters.
This will return sites such as NARedmond, NAVancouver, and NAChicago.

Get-CsNetworkSite -Filter NA*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command in Example 3 calls the Get-CsNetworkSite cmdlet with the Filter parameter.
The value of the Filter parameter is NA*, meaning that this command will retrieve all sites with an Identity beginning with the string NA and followed by any number of characters.
This will return sites such as NARedmond, NAVancouver, and NAChicago.

Get-CsNetworkSite -Filter NA*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsNetworkSite | Where-Object {$_.NetworkRegionID -eq "NorthAmerica"}
```

Example 4 uses two cmdlets, Get-CsNetworkSite and Where-Object, to retrieve all the sites that are part of the NorthAmerica region.
The command begins by calling Get-CsNetworkSite with no parameters to retrieve all network sites.
This collection of sites is then piped to Where-Object, which filters the collection, looking for all sites in the collection where the NetworkRegionID property is equal to (-eq) NorthAmerica.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 uses two cmdlets, Get-CsNetworkSite and Where-Object, to retrieve all the sites that are part of the NorthAmerica region.
The command begins by calling Get-CsNetworkSite with no parameters to retrieve all network sites.
This collection of sites is then piped to Where-Object, which filters the collection, looking for all sites in the collection where the NetworkRegionID property is equal to (-eq) NorthAmerica.

Get-CsNetworkSite | Where-Object {$_.NetworkRegionID -eq "NorthAmerica"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 uses two cmdlets, the Get-CsNetworkSite cmdlet and the Where-Object cmdlet, to retrieve all the sites that are part of the NorthAmerica region.
The command begins by calling the Get-CsNetworkSite cmdlet with no parameters to retrieve all network sites.
This collection of sites is then piped to the Where-Object cmdlet, which filters the collection, looking for all sites in the collection where the NetworkRegionID property is equal to (-eq) NorthAmerica.

Get-CsNetworkSite | Where-Object {$_.NetworkRegionID -eq "NorthAmerica"}

## PARAMETERS

### -Identity
The unique identifier of the network site you want to retrieve.
Sites are created only at the global scope, so you do not need to specify a scope.
Instead, you need to specify only the site ID.
(Note that this is the same value as the NetworkSiteID for the network site.)

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
A wildcard string that allows you to retrieve multiple sites based on matching the site Identity to the Filter value.

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
Retrieves the network site information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Retrieves an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9627869d-101f-4668-bee2-01fce1d84cbd(OCS.14).aspx)

[New-CsNetworkSite]()

[Remove-CsNetworkSite]()

[Set-CsNetworkSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/9627869d-101f-4668-bee2-01fce1d84cbd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9627869d-101f-4668-bee2-01fce1d84cbd(OCS.16).aspx)

