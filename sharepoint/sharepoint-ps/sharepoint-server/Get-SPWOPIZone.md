---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPWOPIZone
schema: 2.0.0
---

# Get-SPWOPIZone

## SYNOPSIS

Returns the zone that is configured on the current SharePoint farm for the WOPI application to use.



## SYNTAX

```
Get-SPWOPIZone [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPWOPIZone returns the zone that is configured on the current SharePoint farm for the WOPI application (such as a server that runs Office Web Apps Server) to use.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
C:\PS>Get-SPWOPIZone
```

This example returns the zone that is configured for the WOPI application (such as a server that runs Office Web Apps Server) to use. 
Return values may be "internal-http," "internal-https," "external-http" or "external-https."

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Content roadmap for Office Web Apps]()

[Use Office Web Apps with SharePoint 2013]()

[Set-SPWOPIZone]()

