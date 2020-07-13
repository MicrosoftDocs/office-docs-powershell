---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-csonlineliswirelessaccesspoint
applicable: Skype for Business Online
title: Get-CsOnlineLisWirelessAccessPoint
schema: 2.0.0
author: junya
ms.author: junya
ms.reviewer:
---

# Get-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Retrieves one or more wireless access points (WAPs) from the location configuration database. Each WAP can be associated with a location, in which case this cmdlet will also retrieve the location information of the WAPs. This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Get-CsOnlineLisWirelessAccessPoint [[-TenantId] <Guid>] [[-BSSID] <String>] [-IsDebug <Boolean>]
 [-TargetStore <String>] [-NCSApiUrl <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet retrieves information on associations between physical locations and the WAP through which the client is connected.

The BSSID (Basic Service Set Identifiers) is used to describe sections of a wireless local area network. It is the MAC of the 802.11 side of the access point. The BSSID in this command is also supporting the wildcard format which is covering all BSSIDs in the range which are sharing the same description and Location ID. The wildcard can be one '*' on either the last one or two character(s).

If a BSSID with wildcard format is already existing, the request for getting the WAP which is within this wildcard range and with the same location ID will return the access point in wildcard format.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineLisWirelessAccessPoint
```

Example 1 retrieves all Location Information Server (LIS) wireless access points and any associated locations.


### -------------------------- Example 2 --------------------------
```
Get-CsOnlineLisWirelessAccessPoint -BSSID 0B-23-CD-16-BB-CC
```

Example 2 retrieves Location Information Server (LIS) wireless access point "0B-23-CD-16-BB-CC" and associated location.

### -------------------------- Example 3 --------------------------
```
Get-CsOnlineLisWirelessAccessPoint -BSSID CB-FF-8D-44-3C-4*
```

Example 3 retrieves Location Information Server (LIS) wireless access point "CB-FF-8D-44-3C-4*" and associated location.

### -------------------------- Example 4 --------------------------
```
Get-CsOnlineLisWirelessAccessPoint -BSSID CB-FF-8D-44-3C-44
```

Example 4 retrieves Location Information Server (LIS) wireless access point "CB-FF-8D-44-3C-4*" and associated location, when "CB-FF-8D-44-3C-4*" is already existing.

## PARAMETERS

### -BSSID
The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. If an entry with the specified BSSID value does not exist, a new WAP location will be created. If an entry with the specified BSSID does exist, that entry will be replaced. It can be presented in wildcard format. The wildcard can be one '*' on either the last one or two character(s).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDebug
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NCSApiUrl
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS


### System.Guid


### System.String


## OUTPUTS


### System.Object


## NOTES


## RELATED LINKS

