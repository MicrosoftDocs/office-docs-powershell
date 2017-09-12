---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Import-SPBusinessDataCatalogDotNetAssembly

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Imports a .NET Connectivity assembly.



## SYNTAX

```
Import-SPBusinessDataCatalogDotNetAssembly -LobSystem <LobSystem> -Path <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DependentAssemblyPaths <String[]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Import-SPBusinessDataCatalogDotNetAssembly cmdlet imports a .NET Connectivity Assembly that corresponds to a .NET Assembly Connector and LobSystem in the metadata store.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------------EXAMPLE 1---------------- (SharePoint Server 2013)
```
C:\PS>Import-SPBusinessDataCatalogDotNetAssembly -LobSystem $ContosoDB -Path "c:\Folder\Assembly.dll"
```

This example imports the assembly Assembly.

### -----------------EXAMPLE 1---------------- (SharePoint Server 2016)
```
C:\PS>Import-SPBusinessDataCatalogDotNetAssembly -LobSystem $ContosoDB -Path "c:\Folder\Assembly.dll"
```

This example imports the assembly Assembly.

### -----------------EXAMPLE 2---------------- (SharePoint Server 2013)
```
C:\PS>Import-SPBusinessDataCatalogDotNetAssembly -LobSystem $ContosoDB -Path "c:\Folder\Assembly.dll" -DependentAssemblyPaths "c:\Folder\Assembly2.dll","c:\Folder\Assembly3.dll"
```

This example imports the assembly Assembly, and also imports the dependent assemblies Assembly2 and Assembly3.

### -----------------EXAMPLE 2---------------- (SharePoint Server 2016)
```
C:\PS>Import-SPBusinessDataCatalogDotNetAssembly -LobSystem $ContosoDB -Path "c:\Folder\Assembly.dll" -DependentAssemblyPaths "c:\Folder\Assembly2.dll","c:\Folder\Assembly3.dll"
```

This example imports the assembly Assembly, and also imports the dependent assemblies Assembly2 and Assembly3.

## PARAMETERS

### -LobSystem
Specifies the LobSystem that the assembly corresponds to.

```yaml
Type: LobSystem
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Specifies the path to the primary assembly.

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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

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

### -DependentAssemblyPaths
Specifies a list of paths to dependent assemblies.

```yaml
Type: String[]
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
For more information, type the following command: get-help about_commonparameters

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

