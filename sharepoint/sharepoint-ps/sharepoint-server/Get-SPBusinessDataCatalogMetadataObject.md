---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPBusinessDataCatalogMetadataObject
schema: 2.0.0
---

# Get-SPBusinessDataCatalogMetadataObject

## SYNOPSIS

Returns a Business Data Connectivity Metadata Store metadata object.



## SYNTAX

```
Get-SPBusinessDataCatalogMetadataObject -BdcObjectType <PSBdcObjectType>
 -ServiceContext <SPServiceContextPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Name <String>]
 [-Namespace <String>] [-ContainingLobSystem <String>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPBusinessDataCatalogMetadataObject cmdlet reads a Business Data Connectivity Metadata Store metadata object from a Business Data Connectivity Service application.

Output for this cmdlet can be a series of objects.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [http://go.microsoft.com/fwlink/p/?LinkId=251831](http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ 
```
PS C:\>Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "Model" -Name "ContosoModel" -ServiceConext http://contoso
```

This example gets a metadata object of type Model with the name ContosoModel from the Business Data Connectivity Metadata Store on the given site.

## PARAMETERS

### -BdcObjectType
Specifies the type of the metadata object to return.

The type must be one of the following valid metadata object types: BdcCatalog, Model, LobSystem, LobSystemInstance, or Entity.

```yaml
Type: PSBdcObjectType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context of the Business Data Connectivity Metadata Store metadata object to return.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the metadata object.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Namespace
Specifies the namespace of the metadata object.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContainingLobSystem
Specifies the name of the LobSystem.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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

