---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Export-SPMetadataWebServicePartitionData
schema: 2.0.0
---

# Export-SPMetadataWebServicePartitionData

## SYNOPSIS
Exports the data from a metadata Web service for a site subscription.

## SYNTAX

```
Export-SPMetadataWebServicePartitionData [-Identity] <SPSiteSubscriptionPipeBind>
 [-ServiceProxy] <SPMetadataServiceProxyCmdletPipeBind> -Path <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-NoCompression] [<CommonParameters>]
```

## DESCRIPTION
Use the Export-SPMetadataWebServicePartitionData cmdlet to export the data from a metadata Web service that is associated with the specified site subscription.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------EXAMPLE-------------- 
```
C:\PS>Export-SPMetadataWebServicePartitionData -Identity $siteSubscriptionPipeBind1 -ServiceProxy "MetadataServiceProxy2" -Path "\\server_name\folder_name\file_name.cab"
```

This example creates a backup of data for a specific site subscription on a Metadata Service application.

## PARAMETERS

### -Identity
Specifies the site subscription to export.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a site subscription (for example, SiteSubscriptionConfig1); or an instance of a valid SiteSubscription object.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceProxy
Specifies the service proxy for the service application that contains the site subscription.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of the service application proxy (for example, ServiceAppProxy1); or an instance of a valid SPMetadataServiceProxy object.

```yaml
Type: SPMetadataServiceProxyCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Path
Specifies the path and file name for the file to create from the exported data.

The type must be a valid path in either of the following forms:

- C:\folder_name\subscription_export
- \\\\server_name\folder_name\file_name.cab

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NoCompression
{{Fill NoCompression Description}}

```yaml
Type: SwitchParameter
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

