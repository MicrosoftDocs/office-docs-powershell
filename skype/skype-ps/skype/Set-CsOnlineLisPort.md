---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/set-csonlinelisport
applicable: Skype for Business Online
title: Set-CsOnlineLisPort
schema: 2.0.0
author: junya
ms.author: junya
ms.reviewer:
---

# Set-CsOnlineLisPort

## SYNOPSIS
Creates a Location Information Server (LIS) port, creates an association between a port and a location (creating a new location if that location doesn't exist), or modifies an existing port and its associated location. The association between a port and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.


## SYNTAX

```
Set-CsOnlineLisPort [[-TenantId] <Guid>] [-ChassisID] <String> -PortID <String> -LocationId <Guid>
 [-Description <String>] [-IsDebug <Boolean>] [-TargetStore <String>] [-NCSApiUrl <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet allows the administrator to map physical locations to the port through which the client is connected.

If a location with an address exactly matching the address parameters entered here (including null values) does not exist in the location database, a new address will be created based on the parameters entered with this cmdlet. (You can retrieve a list of locations by calling the \`Get-CsOnlineLisLocation\` cmdlet.) The \`Set-CsOnlineLisPort\` cmdlet does require or prompt for location parameters. A valid location consists of, at minimum, the Location, HouseNumber, StreetName, City, State and Country. If you do not supply all of these parameters, calls that are received by the referenced port may not contain the information required by the emergency operator (depending on whether valid settings are available for a switch, subnet, or wireless access point that can be used in place of port settings). It is recommended that you be as specific as possible with the location parameters and fill in as many as possible.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineLisPort -PortID 12174 -ChassisID 0B-23-CD-16-AA-CC -Description "LisPort 12174" -LocationId efd7273e-3092-4a56-8541-f5c896bb6fee
```

Example 1 creates the association between port "12174" and LocationId "efd7273e-3092-4a56-8541-f5c896bb6fee".
### -------------------------- Example 2 --------------------------
```
PS C:\> Set-CsOnlineLisPort -PortID 0A-25-55-AB-CD-FF -ChassisID 0B-23-CD-16-AA-CC -Description "LisPort 0A-25-55-AB-CD-FF" -LocationId efd7273e-3092-4a56-8541-f5c896bb6fee
```

Example 2 creates the association between port "0A-25-55-AB-CD-FF" and LocationId "efd7273e-3092-4a56-8541-f5c896bb6fee".
### -------------------------- Example 3 --------------------------
```
PS C:\> Set-CsOnlineLisPort -PortID 12174 -ChassisID 55123 -Description "LisPort 12174" -LocationId efd7273e-3092-4a56-8541-f5c896bb6fee
```

Example 3 creates the association between port "12174" and LocationId "efd7273e-3092-4a56-8541-f5c896bb6fee". (Note: in this example, ChassisID sub-type  is InterfaceName) 

## PARAMETERS

### -ChassisID
If ChassisID sub type is a MAC Address then this value must be in a string format in the following representation nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. Otherwise, (different sub type, such as Interface Name), then this value must be in a string format as set on the switch

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies the administrator defined description of the port.

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

### -LocationId
Specifies the unique identifier of the location to be modified.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
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

### -PortID
If PortID sub type is a MAC Address then this value must be in a string format in the following representation nn-nn-nn-nn-nn-nn, such as 12-34-56-78-90-ab. Otherwise, (different sub type, such as Interface Name), then this value must be in a string format as set on the switch

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: True
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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
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
