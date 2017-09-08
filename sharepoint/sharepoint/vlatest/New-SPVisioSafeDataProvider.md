---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPVisioSafeDataProvider

## SYNOPSIS
Adds a new data provider to a Visio Services application.

## SYNTAX

```
New-SPVisioSafeDataProvider -DataProviderId <String> -DataProviderType <Int32>
 -VisioServiceApplication <SPVisioServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Description <String>]
```

## DESCRIPTION
The New-SPVisioSafeDataProvider cmdlet adds a new data provider to the list of safe data providers for a Visio Services application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE------------------------ (SharePoint Server 2013)
```
C:\PS>New-SPVisioSafeDataProvider -VisioServiceApplication "VGS1" -DataProviderID "CustomProvider" -DataProviderType 5 -Description "Custom Data Provider"
```

This example creates a new safe data provider for a specified Visio Services application.

### -------------------EXAMPLE------------------------ (SharePoint Server 2016)
```
C:\PS>New-SPVisioSafeDataProvider -VisioServiceApplication "VGS1" -DataProviderID "CustomProvider" -DataProviderType 5 -Description "Custom Data Provider"
```

This example creates a new safe data provider for a specified Visio Services application.

## PARAMETERS

### -DataProviderId
Specifies the name of the data provider to create.
The combination of DataProviderID and DataProviderType uniquely identify a data provider for a Visio Services application.
The string that identifies the data provider can be a maximum of 255 alphanumeric characters.

The type must be a valid string that identifies the data provider; for example, VisioDataProvider1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataProviderType
The type must be a valid identity of a data provider type.

Specifies the supported type of the data provider to add.
Custom data types are supported; for example, Excel Services.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VisioServiceApplication
Specifies the Visio Services application in which to add the new safe data provider.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -Description
Specifies the description of the new safe data provider.

The type must be a string with a maximum of 4096 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

