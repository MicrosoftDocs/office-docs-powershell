---
external help file: Microsoft.SharePoint.Taxonomy.dll-help.xml
Module Name: Microsoft.SharePoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/copy-spcontenttypes
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Copy-SPContentTypes
schema: 2.0.0
author: techwriter40
ms.author: pamgreen
ms.reviewer:
---

# Copy-SPContentTypes

## SYNOPSIS
Specifies content types for replicating from on-premises to SharePoint Online (SPO) environment.

## SYNTAX

```
Copy-SPContentTypes [-AssignmentCollection <SPAssignmentCollection>] [-AuthEndpoint <String>]
 -ContentTypeNames <String[]> -Credential <PSCredential> [-GraphApiEndPoint <String>] -LocalSiteUrl <Uri>
 -LocalTermStoreName <String> -RemoteSiteUrl <Uri> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used in hybrid scenarios with SharePoint Online to copy Content Types from an on-premises farm to SharePoint Online.

## EXAMPLES

### Example 1 
```
Copy-SPContentTypes -LocalSiteUrl https://localsite/ -LocalTermStoreName "managed metadata service application proxy" -RemoteSiteUrl https://contoso.sharepoint.com/ -ContentTypeNames @("ContentTypeA", "ContentTypeB") -Credential (Get-Credential) 
```

This example migrates the specified content types named: ContentTypeA, ContentTypeB on the local site https://localsite/ whose term store named "managed metadata service application proxy" to the hub site of remote site https://contoso.sharepoint.com/. If the remote site is a hub site, the migration target will be itself. 

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

**NOTE**: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AuthEndpoint
Specifies the AuthEndpoint to use, but not the default one.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentTypeNames
Specifies the content type names to be migrated. Can be in a form of an array. 

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Specifies the administrator account credential of the target SharePoint Online site.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -GraphApiEndPoint
Specifies the GraphApiEndpoint to use, but not the default one.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalSiteUrl
Specifies the migration source. Can be a local site or a local hubsite.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LocalTermStoreName
Specifies the name of the local term store of the local site.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RemoteSiteUrl
Specifies the migration target. You can input a remote site url or remote hub site url, both will be processed to be the hub site url.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Uri
System.String
System.String[]
System.Management.Automation.PSCredential
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

