---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsNetworkSite
schema: 2.0.0
---

# Get-CsNetworkSite

## SYNOPSIS
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
Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet retrieves the settings for one or more existing sites.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsNetworkSite
```

Calling the Get-CsNetworkSite cmdlet with no parameters will return all network sites configured for CAC or E9-1-1 within the Skype for Business Server deployment.



### -------------------------- Example 2 --------------------------
```
Get-CsNetworkSite -Identity Redmond
```

This command retrieves the site with the Identity (and, by definition, the NetworkSiteID) Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsNetworkSite -Filter NA*
```

The command in Example 3 calls the Get-CsNetworkSite cmdlet with the Filter parameter.
The value of the Filter parameter is NA*, meaning that this command will retrieve all sites with an Identity beginning with the string NA and followed by any number of characters.
This will return sites such as NARedmond, NAVancouver, and NAChicago.

### -------------------------- Example 4 --------------------------
```
Get-CsNetworkSite | Where-Object {$_.NetworkRegionID -eq "NorthAmerica"}
```

Example 4 uses two cmdlets, the Get-CsNetworkSite cmdlet and the Where-Object cmdlet, to retrieve all the sites that are part of the NorthAmerica region.
The command begins by calling the Get-CsNetworkSite cmdlet with no parameters to retrieve all network sites.
This collection of sites is then piped to the Where-Object cmdlet, which filters the collection, looking for all sites in the collection where the NetworkRegionID property is equal to (-eq) NorthAmerica.


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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType


## NOTES


## RELATED LINKS

[New-CsNetworkSite](New-CsNetworkSite.md)

[Remove-CsNetworkSite](Remove-CsNetworkSite.md)

[Set-CsNetworkSite](Set-CsNetworkSite.md)
