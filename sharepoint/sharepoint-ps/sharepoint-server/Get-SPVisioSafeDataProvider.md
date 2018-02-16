---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPVisioSafeDataProvider
schema: 2.0.0
---

# Get-SPVisioSafeDataProvider

## SYNOPSIS
Returns the settings of a safe data provider for a Visio Services application.

## SYNTAX

```
Get-SPVisioSafeDataProvider -VisioServiceApplication <SPVisioServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-DataProviderId <String>] [-DataProviderType <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-SPVisioSafeDataProvider cmdlet retrieves the settings of the safe provider for a Visio Services application.
If the DataProviderID parameter is not specified, this cmdlet returns the collection of safe providers in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE 1---------------------- 
```
C:\PS>Get-SPVisioSafeDataProvider -VisioServiceApplication "VGS1"
```

This example returns a list of safe data providers for a specific Visio Services application.

### -------------------EXAMPLE 2---------------------- 
```
C:\PS>Get-SPVisioSafeDataProvider -VisioServiceApplication "VGS1" -DataProviderID "SQLOLEDB" -DataProviderType 1
```

This example returns information about a specified safe data provider for a specific Visio Services application.

## PARAMETERS

### -VisioServiceApplication
Specifies the Visio Services application that contains the SPVisioSafeDataProvider object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DataProviderId
Specifies the safe data provider to get.
The combination of DataProviderID and DataProviderType uniquely identify a data provider for a Visio Graphics Service application.
The string that identifies the data provider can be a maximum of 255 alphanumeric characters.

The type must be a valid string that identifies the data provider; for example, VisioDataProvider1.

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

### -DataProviderType
Specifies the supported type of the data provider to get.
Custom data types are supported; for example, Excel services.

The type must be a valid identity of a data provider type.

```yaml
Type: Int32
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

