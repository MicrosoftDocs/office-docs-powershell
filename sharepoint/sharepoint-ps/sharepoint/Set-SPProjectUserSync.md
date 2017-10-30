---
external help file: 
applicable: SharePoint Server 2016
schema: 2.0.0
---

# Set-SPProjectUserSync

## SYNOPSIS
Controls the behavior of WSS user sync.

## SYNTAX

```
Set-SPProjectUserSync [-Url] <Uri> [-Value] <UserSyncParameterValues[]>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
WSS User sync synchronizes Project Server permissions with SharePoint Server permissions.
When users are granted permissions to Project Server entities, permissions are granted to the Project Web App site and the connected SharePoint sites.
By using this cmdlet, administrators can control the behavior of WSS User sync.
They can choose to disable WSS User sync, enable it only for the Project Web App site, enable it only for connected SharePoint sites, or enable for both.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
C:\PS>Set-SPProjectUserSync http://localhost/pwa EnablePWA
```

In this example, WSS User sync is enabled for the Project Web App site at http://localhost/pwa.


## PARAMETERS

### -Url
Specifies the URL of the Project Web App instance to set the Project User Sync settings.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Value
Disabled completely disables WSS User Sync; EnablePWA enables WSS User sync for the Project Web App site; EnableEntProj enables WSS User sync for all SharePoint sites connected to Enterprise Projects; EnableSPProj enables WSS User sync for all SharePoint sites connected to SharePoint Projects; EnableAll enables WSS User sync for the Project Web App site and all connected SharePoint sites.

```yaml
Type: UserSyncParameterValues[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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

[Set-SPProjectUserSyncDisabledSyncThreshold]()

[Set-SPProjectUserSyncFullSyncThreshold]()

[Set-SPProjectUserSyncOffPeakSyncThreshold]()
