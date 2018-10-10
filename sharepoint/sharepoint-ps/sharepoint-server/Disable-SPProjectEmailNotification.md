---
external help file: 
applicable: Project Server 2016, Project Server 2019
title: Disable-SPProjectEmailNotification
schema: 2.0.0
---

# Disable-SPProjectEmailNotification

## SYNOPSIS
Turns off the Project Web App site level setting for email notifications in Project Server.

## SYNTAX

```
Disable-SPProjectEmailNotification [-Url] <Uri> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
Turns off the Project Web App site level setting for email notifications in Project Server.

## EXAMPLES

### Example 1 
```
PS C:\>Disable-SPProjectEmailNotification -Url http://pwa_site
```

Disables Project Server email notifications on the Project Web App site, http://pwa_site.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016, Project Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Url
The URL of the Project Web App site.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016, Project Server 2019

Required: True
Position: 0
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

