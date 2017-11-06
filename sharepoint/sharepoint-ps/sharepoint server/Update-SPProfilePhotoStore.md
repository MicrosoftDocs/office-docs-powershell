---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Update-SPProfilePhotoStore

## SYNOPSIS
Updates the profile photo store to be compatible with SharePoint Server.

## SYNTAX

```
Update-SPProfilePhotoStore -MySiteHostLocation <SPSitePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-CreateThumbnailsForImportedPhotos <Boolean>]
 [-NewBaseUri <Uri>] [-NoDelete <Boolean>] [-OldBaseUri <Uri>] [<CommonParameters>]
```

## DESCRIPTION
After upgrading from Office SharePoint Server to SharePoint Server, run the `Update-SPProfilePhotoStore` cmdlet to ensure that the SharePoint profile photo store is compatible with SharePoint Server.
The `Update-SPProfilePhotoStore` cmdlet should be used only after an upgrade from Office SharePoint Server has completed.
When the `Update-SPProfilePhotoStore` cmdlet is used, three thumbnail versions with predictable sizes and names are created from the original photo, the new photos are placed into the My Site Host's User Photos library, and the property value in the profile database is updated.

During the operation, the original image is left as-is.
If the operation fails for certain users for any reason, it continues on to the next user.

During the migration of profile photos from one server URL to another, one can use the OldBaseUri and NewBaseUri parameters.
You just need to specify the starting portion of the URL that has changed from old to new and an attempt to rebase the profile picture URLs will occur.

For example, OldBaseUri: http://server1/my/ProfilePhotos; NewBaseUri: http://server1/my/NewLocation/ProfilePhotos

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-------------------
```
C:\PS>Update-SPProfilePhotoStore -MySiteHostLocation http://mysites
```

This example uploads photos to a specified My Site host location.

## PARAMETERS

### -MySiteHostLocation
Specifies the URL for the My Site host location where the photos are to be uploaded.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CreateThumbnailsForImportedPhotos
Creates thumbnails for all the imported user profile pictures.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewBaseUri
Specifies the new URL for profile pictures.
For example, http://server2/.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoDelete
When the value is set to true, it specifies the deletion of imported user profile pictures after creating thumbnails for them.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OldBaseUri
Specifies the old URL for profile pictures.
For example, http://server1/.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
