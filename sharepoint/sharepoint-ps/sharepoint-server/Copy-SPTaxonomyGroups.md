---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Copy-SPTaxonomyGroups
schema: 2.0.0
---

# Copy-SPTaxonomyGroups

## SYNOPSIS
Copies Managed Metadata Taxonomy Groups from SharePoint on-premesis to SharePoint Online.

## SYNTAX

```
Copy-SPTaxonomyGroups [-AssignmentCollection <SPAssignmentCollection>] [-AuthEndpoint <String>]
 -Credential <PSCredential> [-GraphApiEndpoint <String>] -GroupNames <String[]> -LocalSiteUrl <Uri>
 -LocalTermStoreName <String> -RemoteSiteUrl <Uri> [<CommonParameters>]
```

## DESCRIPTION
Use the Copy-SPTaxonomyGroups cmdlet to copy specified Metadata groups from an on-premises environment to SharePoint Online in a Hybrid SharePoint setup. SharePoint Online becomes the authoritative source for the copied Taxonomy Group. All updates to the Taxonomy Group must be made in SharePoint Online.  Once a Taxonomy Group is copied, it cannot be re-copied.

## EXAMPLES

### Example 1 
```
PS C:\>$credential = Get-Credential
PS C:\>Copy-SPTaxonomyGroups -LocalTermStoreName "Managed Metadata Service Application Proxy" -LocalSiteUrl "http://sharepoint" -RemoteSiteUrl "http://contoso.sharepoint.com" -GroupNames "Group1","Group2" -Credential $credential
```

This example copies two taxonomy groups "Group1" and "Group2" from local Term Store to the remote Term Store in "http://contoso.com". These two sites have been enabled with Hybrid Taxonomy.

## PARAMETERS

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AuthEndpoint
Specifies the Azure Active Directory Graph API authentication endpoint. By default, the well-known endpoint will be used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Specifies the Taxonomy Term Store administrator credential of remote SharePoint Online Term Store.

Writes data to remote Term Store, so a Term Store Administrator's credential is needed to perform the operations.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -GraphApiEndpoint
Specifies the Azure Active Directory Graph API endpoint. By default, the well-known endpoint will be used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupNames
Specifies the name array of Taxonomy groups in local on-premises term store that will be copied to remote SharePoint Online Term store.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LocalSiteUrl
Specifies the Url of local SharePoint on-premises site that contains the local Taxonomy Term Store.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LocalTermStoreName
Specifies the name of local Taxonomy Term Store in the SharePoint on-premises farm.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RemoteSiteUrl
Specifies the Url of remote SharePoint Online site that contains remote Taxonomy Term Store.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
System.Uri
System.String[]
System.Management.Automation.PSCredential
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

