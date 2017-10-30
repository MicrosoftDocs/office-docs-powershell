---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# New-SPMetadataServiceApplicationProxy

## SYNOPSIS
Creates a new connection to a managed metadata service application.


## SYNTAX

```
New-SPMetadataServiceApplicationProxy -Name <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-ContentTypePushdownEnabled] [-ContentTypeSyndicationEnabled] [-DefaultProxyGroup]
 [-DefaultKeywordTaxonomy] [-DefaultSiteCollectionTaxonomy] [-PartitionMode]
 [-ServiceApplication <SPMetadataServiceCmdletPipeBind>] [-Uri <String>] [-WhatIf] [<CommonParameters>]
```


## DESCRIPTION
Use the `New-SPMetadataServiceApplicationProxy` cmdlet to create a new connection to a managed metadata service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------------EXAMPLE 1----------------
```
C:\PS>New-SPMetadataServiceApplicationProxy -Name "MetadataServiceProxy1" -ServiceApplication "MetadataServiceApp1"
```

This example creates a connection to a managed metadata service application in the local farm.


### -------------------EXAMPLE 2----------------
```
C:\PS>New-SPMetadataServiceApplicationProxy -Name "MetadataServiceProxy3" -ServiceApplication "MetadataServiceApp3" -PartitionMode
```

This example creates a partitioned connection to a managed metadata service application in the local farm.


## PARAMETERS

### -Name
Specifies the display name of the service application proxy to create.
The name can contain a maximum of 128 characters.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContentTypePushdownEnabled
Specifies that existing instances of changed content types in subsites and libraries will be updated.

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

### -ContentTypeSyndicationEnabled
Specifies that this connection will provide access to the content types that are associated with the managed metadata service application.

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

### -DefaultProxyGroup
Specifies that the connection be added to the default proxy group for the farm.

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

### -DefaultKeywordTaxonomy
Specifies that new enterprise keywords will be stored in the term store associated with the managed metadata service application.

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

### -DefaultSiteCollectionTaxonomy
Specifies that the term set that is created when you create a new managed metadata column will be stored in the term store associated with the managed metadata application.

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

### -PartitionMode
Specifies that the service application restrict data by subscription.

This property cannot be changed after the service application proxy has been created.

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

### -ServiceApplication
Specifies the local managed metadata service application to connect to.
The service application must exist on the local farm.

The type must be a valid GUID; a valid name of the service application; or an instance of a valid SPMetadataServiceApplication object.

```yaml
Type: SPMetadataServiceCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Uri
Specifies the URI of a remote managed metadata service application to connect to.

To specify the managed metadata service application that this proxy is connecting to, you must set only the URI parameter or only the ServiceApplication parameter.

The type must be a valid URL, in the form urn:schemas-microsoft-com:sharepoint:service:fa5c65ebed244a15817768825004f3a7#authority=urn:uuid:acdd6deff6sd4bb899f5beb42051bf3b7&authority=https:// \<server\>:32844/Topology/topology.svc.

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

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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
