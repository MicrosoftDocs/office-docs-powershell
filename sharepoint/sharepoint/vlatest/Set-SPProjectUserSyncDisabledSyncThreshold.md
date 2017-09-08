---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPProjectUserSyncDisabledSyncThreshold

## SYNOPSIS
Defines the threshold over which a user sync job will not be executed but instead will be deleted.
This threshold is the product of the number of projects multiplied by the number of users.

## SYNTAX

```
Set-SPProjectUserSyncDisabledSyncThreshold [-Url] <Uri> [-Threshold] <Int32>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Set-SPProjectUserSyncDisabledSyncThreshold cmdlet d the threshold over which a user sync job will not be executed but instead will be deleted.
This threshold is the product of the number of projects multiplied by the number of users.
The purpose of configuring this threshold is to prevent malicious user syncs of the whole server.
Set it to a negative value to reset to default value (not set).

This cmdlet only works in Project Server Permission mode.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### --------------------EXAMPLE--------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPProjectUserSyncDisabledSyncThreshold -URL http//contoso-AppSrv/PWA -Threshold 400
```

This example sets the sync disable threshold for the Project Web App instance at http//contoso-AppSrv/PWA to 400.

## PARAMETERS

### -Url
The URL of the Project Web App instance where you want to set the threshold.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Threshold
A whole number consisting of the number of projects multiplied by the number of users.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Set-SPProjectUserSync]()

[Set-SPProjectUserSyncFullSyncThreshold]()

[Set-SPProjectUserSyncOffPeakSyncThreshold]()

