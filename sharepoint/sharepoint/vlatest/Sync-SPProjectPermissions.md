---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/184af23d-deda-44d9-bdfe-4879cbf13fc4(Office.15).aspx
schema: 2.0.0
---

# Sync-SPProjectPermissions

## SYNOPSIS
Manually synchronizes permissions between a Project Web App instance and its associated project sites.

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Sync-SPProjectPermissions [-Url] <Uri> [-SyncPWASite] [-SyncProjectSites] [-Async]
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Sync-SPProjectPermissions [-Url] <Uri> [[-Type] <SharePointPermissionModeSyncType>]
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Sync-SPProjectPermissions cmdlet causes permissions to be synchronized to the project sites associated with projects in a Project Web App instance and the permissions set on those projects in Project Server 2013.

This cmdlet works with both SharePoint permission mode and Project Server permission mode.

For permissions and the most current information about Windows PowerShell for Project Server, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251833 (http://go.microsoft.com/fwlink/p/?LinkId=251833).

## EXAMPLES

### (SharePoint Server 2016)
```
C:\PS>
```

## PARAMETERS

### -Url
Specifies the URL of the Project Web App instance for which you want to synch permissions.

The type must be a valid URL, in the form http://\<ServerName\>/\<PWAName\>.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncPWASite
Triggers a synchronization of Project Server permissions to the PWA site.

This parameter is used with Project Server permission mode.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 2
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Specifies the type of sync to perform: full or incremental.

This parameter is used with SharePoint permission mode.

```yaml
Type: SharePointPermissionModeSyncType
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SyncProjectSites
Triggers a synchronization of Project Server permissions to the project sites.

This parameter is used with Project Server permission mode.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 3
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Async
Specifies that the synchronization is placed in the Project Server queue.
Omitting this flag causes the synchronization to occur immediately within the Windows PowerShell console.

This parameter is used with Project Server permission mode.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: 4
Default value: False
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

