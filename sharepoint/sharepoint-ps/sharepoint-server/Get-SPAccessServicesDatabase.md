---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServicesDatabase
schema: 2.0.0
---

# Get-SPAccessServicesDatabase

## SYNOPSIS
Returns an Access Services database.

## SYNTAX

```
Get-SPAccessServicesDatabase [[-Identity] <AccessServicesDatabasePipeBind>]
 [[-ContentDb] <SPContentDatabasePipeBind>] [[-AccessAppsOnly] <Boolean>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
Returns an Access Services database.

## EXAMPLES

### Example 1 
```
PS C:\>Get-SPAccessServicesDatabase -Identity https://apps-eec88dc5f597c6.contoso-apps.com/sites/team/accessApp
```
Using the App Web, this example returns the Access database named 'accessApp'.

### Example 2 
```
PS C:\>Get-SPAccessServicesDatabase -ContentDb WSS_Content
```
This example returns all Access databases associated with sites in the content database, WSS_Content.

## PARAMETERS

### -AccessAppsOnly
Returns only Access Apps.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

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

### -ContentDb
The Content Database to return Access Apps from.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Identity
The URL to the Access App. Must be the App Web URL.

```yaml
Type: AccessServicesDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Access.Services.PowerShell.AccessServicesDatabasePipeBind
Microsoft.SharePoint.PowerShell.SPContentDatabasePipeBind
System.Boolean
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

