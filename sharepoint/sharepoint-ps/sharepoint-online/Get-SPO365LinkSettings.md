---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPO365LinkSettings
schema: 2.0.0
---

# Get-SPO365LinkSettings

## SYNOPSIS
This cmdlet returns the hybrid configuration status of the farm.

## SYNTAX

```
Get-SPO365LinkSettings [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns the status of the hybrid configuration including the following:

* Status of OneDrive for Business redirection
* URL of the SharePoint Online OneDrive for Business tenant
* If redirected Sites
* If the Hybrid App Launcher is enabled
* If hybrid OneDrive for Business and/or Sites is enabled for Everyone
* If redirection of OneDrive for Business is set to the Cloud by default

## EXAMPLES

### Example 1 
```
PS C:\>Get-SPO365LinkSettings
```

Returns the hybrid configuration status of the farm.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

