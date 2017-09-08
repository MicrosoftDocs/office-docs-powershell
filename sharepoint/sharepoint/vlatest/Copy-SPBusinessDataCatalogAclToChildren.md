---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Copy-SPBusinessDataCatalogAclToChildren

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Copy-SPBusinessDataCatalogAclToChildren -MetadataObject <MetadataObject>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
The Copy-SPBusinessDataCatalogAclToChildren cmdlet copies a set of rights of a Business Data Connectivity metadata object to its child objects.

Any principals and their rights will be lost from the child metadata objects.
Make sure that the parent metadata object has the final permissions you want, or make sure to append them to the child object again after you run this cmdlet.

Running this cmdlet on a BdcObjectType BdcCatalog (Business Data Connectivity Metadata Store) will propagate to:

- BDC Models
- External Systems
- External Content Types
- Methods
- Method Instances

Running this cmdlet on a BdcObjectType Model (Business Data Connectivity Model) will propagate to:

- Nothing; this type has no child metadata objects

Running this cmdlet on a BdcObjectType LobSystem (External System) will propagate to:

- External Content Types
- Methods
- Method Instances

Running this cmdlet on a BdcObjectType Entity (External Content Type) will propagate to:

- Methods
- Method Instances

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>$ExternalSystem = Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "LobSystem" -ServiceContext http://contoso -Name "ContosoDatabase"
```

This example looks at the principals (users) and their corresponding rights given for the External System metadata object, and overwrites the permissions of its child metadata objects with these same principals and rights.

Any principals and their rights will be lost from the child metadata objects.
Make sure that the parent metadata object has the final permissions you want, or make sure to append them to the child object again after you run this cmdlet.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>$ExternalSystem = Get-SPBusinessDataCatalogMetadataObject -BdcObjectType "LobSystem" -ServiceContext http://contoso -Name "ContosoDatabase"
```

This example looks at the principals (users) and their corresponding rights given for the External System metadata object, and overwrites the permissions of its child metadata objects with these same principals and rights.

Any principals and their rights will be lost from the child metadata objects.
Make sure that the parent metadata object has the final permissions you want, or make sure to append them to the child object again after you run this cmdlet.

## PARAMETERS

### -MetadataObject
Specifies the Business Data Connectivity metadata object.

```yaml
Type: MetadataObject
Parameter Sets: (All)
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

