---
external help file: 
applicable: Project Server 2013, Project Server 2016, Project Server 2019
title: Enable-SPProjectEnterpriseProjectTaskSync
schema: 2.0.0
---

# Enable-SPProjectEnterpriseProjectTaskSync

## SYNOPSIS
Enables task sync between Project Web App and the associated project site. Once this is enabled, tasks created in the enterprise project in Project Web App will sync to the task list on the project site associated with the project. This feature is disabled by default.

If you enable this feature, the restrictions that come with SharePoint lists, such as the maximum number of items supported before throttling, apply.

Syncing tasks uses the queue and can affect performance. You should enable it only if you really need it.

## SYNTAX

```
Enable-SPProjectEnterpriseProjectTaskSync [-AssignmentCollection <SPAssignmentCollection>] -Url <Uri>
 [<CommonParameters>]
```

## DESCRIPTION
Enables task sync between Project Web App and the associated project site.

## EXAMPLES

### Example 1 
```
PS C:\>Enable-SPProjectEnterpriseProjectTaskSync -Url http://pwa_site
```

Enables Project Task sync on the Project Web Apps site, http://pwa_site.

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
The URL of the PWA site.

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

