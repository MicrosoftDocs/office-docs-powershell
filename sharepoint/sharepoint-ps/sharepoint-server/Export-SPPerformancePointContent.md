---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Export-SPPerformancePointContent
schema: 2.0.0
---

# Export-SPPerformancePointContent

## SYNOPSIS
Exports a Performance Point Server (PPS) dashboard.

## SYNTAX

```
Export-SPPerformancePointContent [-AssignmentCollection <SPAssignmentCollection>] -ExportFileUrl <String>
 -ItemUrls <Array> [<CommonParameters>]
```

## DESCRIPTION
The Export-SPPerformancePointContent exports a PPS dashboard and its dependencies from a CMP file that can then be used to import to another server.

## EXAMPLES

### Example 1 
```
PS C:\>Export-SPPerformancePointContent -ItemUrls http://contoso/sites/marketing/default.aspx -ExportFileURL "http://contoso/bicenter/SharedDocuments/bi/dashboard1.cmp"
```

This example exports a dashboard at the location specified with the ItemUrls parameter.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ExportFileUrl
Output name and path of the CMP file to which the data will be stored.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemUrls
The URL to the dashboard to be migrated or to the additional content URLs.

```yaml
Type: Array
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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

