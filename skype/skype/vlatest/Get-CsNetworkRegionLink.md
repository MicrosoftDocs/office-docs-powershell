---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkRegionLink

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves one or more links between network regions configured for call admission control (CAC).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves one or more links between network regions configured for call admission control (CAC).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkRegionLink [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkRegionLink [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Regions within a network are linked through physical WAN connectivity.
This cmdlet retrieves one or more region links that are defined within the network configuration settings for a Microsoft Lync Server 2010 deployment.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkRegionLink cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkRegionLink"}

**Below Content Applies To:** Lync Server 2013

Regions within a network are linked through physical WAN connectivity.
This cmdlet retrieves one or more region links that are defined within the network configuration settings for a Lync Server deployment.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkRegionLink cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkRegionLink"}

**Below Content Applies To:** Skype for Business Server 2015

Regions within a network are linked through physical WAN connectivity.
This cmdlet retrieves one or more region links that are defined within the network configuration settings for a Skype for Business Server 2015 deployment.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegionLink
```

Example 1 retrieves all network region links defined within a Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves all network region links defined within a Lync Server deployment.

Get-CsNetworkRegionLink

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves all network region links defined within a Skype for Business Server 2015 deployment.

Get-CsNetworkRegionLink

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegionLink -Identity NA_EMEA
```

Example 2 retrieves information about (at most) one network region link, the link with the Identity NA_EMEA.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves information about (at most) one network region link, the link with the Identity NA_EMEA.

Get-CsNetworkRegionLink -Identity NA_EMEA

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves information about (at most) one network region link, the link with the Identity NA_EMEA.

Get-CsNetworkRegionLink -Identity NA_EMEA

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegionLink -Filter *EMEA*
```

In this example we use the Filter parameter to retrieve all network region links with the string EMEA in the name (Identity) of the link.
Notice the * characters, one before the string EMEA and one after.
This means any character or characters can precede or follow the string; the string EMEA simply must be included in the Identity somewhere.
This will retrieve links with names such as NA_EMEA, EMEA_APAC, and EMEA2_SA.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In this example we use the Filter parameter to retrieve all network region links with the string EMEA in the name (Identity) of the link.
Notice the * characters, one before the string EMEA and one after.
This means any character or characters can precede or follow the string; the string EMEA simply must be included in the Identity somewhere.
This will retrieve links with names such as NA_EMEA, EMEA_APAC, and EMEA2_SA.

Get-CsNetworkRegionLink -Filter *EMEA*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In this example we use the Filter parameter to retrieve all network region links with the string EMEA in the name (Identity) of the link.
Notice the * characters, one before the string EMEA and one after.
This means any character or characters can precede or follow the string; the string EMEA simply must be included in the Identity somewhere.
This will retrieve links with names such as NA_EMEA, EMEA_APAC, and EMEA2_SA.

Get-CsNetworkRegionLink -Filter *EMEA*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsNetworkRegionLink | Where-Object {$_.NetworkRegionID1 -eq "EMEA" -or $_.NetworkRegionID2 -eq "EMEA"}
```

This example retrieves all network region links that include EMEA as one of the two regions being linked.
The example begins by calling Get-CsNetworkRegionLink with no parameters, which will retrieve all region links.
This collection of links is then piped to the Where-Object cmdlet.
Where-Object looks through each member of the collection one-by-one, checking the values of the NetworkRegionID1 and NetworkRegionID2 properties.
If either of these properties is equal to EMEA--in other words if either NetworkRegionID1 is equal to (-eq) EMEA or (-or) NetworkRegionID2 is equal to (-eq) EMEA--then we want to keep that item in the collection and display it.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

This example retrieves all network region links that include EMEA as one of the two regions being linked.
The example begins by calling Get-CsNetworkRegionLink with no parameters, which will retrieve all region links.
This collection of links is then piped to the Where-Object cmdlet.
Where-Object looks through each member of the collection one-by-one, checking the values of the NetworkRegionID1 and NetworkRegionID2 properties.
If either of these properties is equal to EMEA--in other words if either NetworkRegionID1 is equal to (-eq) EMEA or (-or) NetworkRegionID2 is equal to (-eq) EMEA--then we want to keep that item in the collection and display it.

Get-CsNetworkRegionLink | Where-Object {$_.NetworkRegionID1 -eq "EMEA" -or $_.NetworkRegionID2 -eq "EMEA"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all network region links that include EMEA as one of the two regions being linked.
The example begins by calling the Get-CsNetworkRegionLink cmdlet with no parameters, which will retrieve all region links.
This collection of links is then piped to the Where-Object cmdlet.
The Where-Object cmdlet looks through each member of the collection one-by-one, checking the values of the NetworkRegionID1 and NetworkRegionID2 properties.
If either of these properties is equal to EMEA--in other words if either NetworkRegionID1 is equal to (-eq) EMEA or (-or) NetworkRegionID2 is equal to (-eq) EMEA--then we want to keep that item in the collection and display it.

Get-CsNetworkRegionLink | Where-Object {$_.NetworkRegionID1 -eq "EMEA" -or $_.NetworkRegionID2 -eq "EMEA"}

## PARAMETERS

### -Identity
The unique identifier of the network region link you want to retrieve.
Network region links are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that link.
(Note that this value is the same as the NetworkRegionLinkID.)

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
Accepts a wildcard string that is used to retrieve network links based on matching the value of the Identity to the wildcard string.

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
Retrieves the network region link information from the local replica of the Central Management store, rather than the Central Management store itself.

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
Retrieves one or more objects of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/dc5cb988-13e2-4af4-8b36-0aaa58ebf1c5(OCS.14).aspx)

[New-CsNetworkRegionLink]()

[Remove-CsNetworkRegionLink]()

[Set-CsNetworkRegionLink]()

[Online Version](http://technet.microsoft.com/EN-US/library/dc5cb988-13e2-4af4-8b36-0aaa58ebf1c5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/dc5cb988-13e2-4af4-8b36-0aaa58ebf1c5(OCS.16).aspx)

