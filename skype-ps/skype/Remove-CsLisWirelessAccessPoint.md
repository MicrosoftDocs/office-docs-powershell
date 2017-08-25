---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisWirelessAccessPoint

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a Location Information Server (LIS) wireless access point (WAP).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes a Location Information Server (LIS) wireless access point (WAP).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsLisWirelessAccessPoint -BSSID <String> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes a WAP from the location configuration database.
Removing the WAP will not remove the location associated with that WAP.
Use the Remove-CsLisLocation cmdlet to remove a location.

If you attempt to remove a WAP that does not exist, no action will be taken and you will not receive an error or a warning message.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsLisWirelessAccessPoint cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsLisWirelessAccessPoint"}

**Below Content Applies To:** Skype for Business Server 2015

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information.
In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors.
The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location.
This cmdlet removes a WAP from the location configuration database.
Removing the WAP will not remove the location associated with that WAP.
Use the Remove-CsLisLocation cmdlet to remove a location.

If you attempt to remove a WAP that does not exist, no action will be taken and you will not receive an error or a warning message.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsLisWirelessAccessPoint -BSSID 99-99-99-99-99-99
```

Example 1 removes the LIS WAP location with the BSSID 99-99-99-99-99-99.

If this WAP was associated with a location, that location will not be removed, only the WAP will be removed from the location mapping.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the LIS WAP location with the BSSID 99-99-99-99-99-99.

If this WAP was associated with a location, that location will not be removed, only the WAP will be removed from the location mapping.

Remove-CsLisWirelessAccessPoint -BSSID 99-99-99-99-99-99

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the LIS WAP location with the BSSID 99-99-99-99-99-99.

If this WAP was associated with a location, that location will not be removed, only the WAP will be removed from the location mapping.

Remove-CsLisWirelessAccessPoint -BSSID 99-99-99-99-99-99

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsLisWirelessAccessPoint | Where-Object {$_.Location -like "*Bldg30*"} | Remove-CsLisWirelessAccessPoint
```

This example removes all WAPs in building 30.
The example begins with a call to the Get-CsLisWirelessAccessPoint cmdlet, which returns a collection of all WAPs.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that contains the string Bldg30 anywhere in the value; in other words, a Location that is like (-like) Bldg30.
Finally, we pipe this collection of WAPs in building 30 to the Remove-CsLisWirelessAccessPoint cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the WAPs that reference those locations are removed.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all WAPs in building 30.
The example begins with a call to the Get-CsLisWirelessAccessPoint cmdlet, which returns a collection of all WAPs.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that contains the string Bldg30 anywhere in the value; in other words, a Location that is like (-like) Bldg30.
Finally, we pipe this collection of WAPs in building 30 to the Remove-CsLisWirelessAccessPoint cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the WAPs that reference those locations are removed.

Get-CsLisWirelessAccessPoint | Where-Object {$_.Location -like "*Bldg30*"} | Remove-CsLisWirelessAccessPoint

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all WAPs in building 30.
The example begins with a call to the Get-CsLisWirelessAccessPoint cmdlet, which returns a collection of all WAPs.
This collection is piped to the Where-Object cmdlet, which finds the items in that collection that have a Location property that contains the string Bldg30 anywhere in the value; in other words, a Location that is like (-like) Bldg30.
Finally, we pipe this collection of WAPs in building 30 to the Remove-CsLisWirelessAccessPoint cmdlet, which removes everything in that collection.

Note that, as in Example 1, no locations are removed from the location configuration database, only the WAPs that reference those locations are removed.

Get-CsLisWirelessAccessPoint | Where-Object {$_.Location -like "*Bldg30*"} | Remove-CsLisWirelessAccessPoint

## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point you want to remove.
This value will be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Accepts pipelined input of LIS wireless access point objects.

## OUTPUTS

###  
This cmdlet removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/656190b0-bde0-4a92-a6b5-b96a389c4863(OCS.14).aspx)

[Set-CsLisWirelessAccessPoint]()

[Get-CsLisWirelessAccessPoint]()

[Remove-CsLisLocation]()

[Online Version](http://technet.microsoft.com/EN-US/library/656190b0-bde0-4a92-a6b5-b96a389c4863(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/656190b0-bde0-4a92-a6b5-b96a389c4863(OCS.16).aspx)

