---
external help file:
applicable: SharePoint Online
schema: 2.0.0
author: vesajuvonen
ms.author: vesaj
ms.reviewer:
---
# New-PnPUPABulkImportJob

## SYNOPSIS
Submit up a new user profile bulk import job.

## SYNTAX 

```powershell
New-PnPUPABulkImportJob -Folder <String>
                        -Path <String>
                        -UserProfilePropertyMapping <Hashtable>
                        -IdProperty <String>
                        [-IdType <ImportProfilePropertiesUserIdType>]
                        [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
See https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/bulk-user-profile-update-api-for-sharepoint-online for information on the API and how the bulk import process works.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
PS C:\>Connect-PnPOnline -Url https://contoso-admin.sharepoint.com
@" 
 {
  "value": [
    {
      "IdName": "mikaels@contoso.com",
      "Department": "PnP",
    },
	{
      "IdName": "vesaj@contoso.com",
      "Department": "PnP",
    }    
  ]
}
"@ > profiles.json

PS C:\>New-PnPUPABulkImportJob -Folder "Shared Documents" -Path profiles.json -IdProperty "IdName" -UserProfilePropertyMapping @{"Department"="Department"}
```

This will submit a new user profile bulk import job to SharePoint Online.

> [!NOTE]
> You must upload the json document to the Shared Documents library in the SharePoint Online tenant admin prior to running this cmdlet. You also must connect to the tenant admin via `Connect-PnPOnline` prior to running `New-PnPUPABulkImportJob`.

## PARAMETERS

### -Folder
Site or server relative URL of the folder to where you want to store the import job file.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -IdProperty
The name of the identifying property in your file.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 3
Accept pipeline input: False
```

### -IdType
The type of profile identifier (Email/CloudId/PrincipalName). Defaults to Email.

```yaml
Type: ImportProfilePropertiesUserIdType
Parameter Sets: (All)

Required: False
Position: 4
Accept pipeline input: False
```

### -Path
The local file path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 1
Accept pipeline input: False
```

### -UserProfilePropertyMapping
Specify user profile property mapping between the import file and UPA property names.

```yaml
Type: Hashtable
Parameter Sets: (All)

Required: True
Position: 2
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)
