---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Get-SPProjectDatabaseUsage
schema: 2.0.0
---

# Get-SPProjectDatabaseUsage

## SYNOPSIS
Returns an approximate size, in megabytes (MB) of the Project Web App data used in the content database.

## SYNTAX

```
Get-SPProjectDatabaseUsage [-AssignmentCollection <SPAssignmentCollection>] -Url <Uri> [<CommonParameters>]
```

## DESCRIPTION
Returns an approximate size, in megabytes (MB) of the Project Web App data used in the content database.

## EXAMPLES

### Example 1 
```
PS C:\>Get-SPProjectDatabaseUsage -Url  http://contoso.com/sites/pwa
```

This example shows the size of the Project Web App data in the content data for the Project Web App site at http://contoso.com/sites/pwa.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
The URL of the Project Web App site collection.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2013, Project Server 2016, Project Server 2019

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

