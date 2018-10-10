---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPVisioSafeDataProvider
schema: 2.0.0
---

# Set-SPVisioSafeDataProvider

## SYNOPSIS
Specifies a description of a safe data provider for a Visio Services application.

## SYNTAX

```
Set-SPVisioSafeDataProvider -DataProviderId <String> -DataProviderType <Int32> -Description <String>
 -VisioServiceApplication <SPVisioServiceApplicationPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPVisioSafeDataProvider` cmdlet sets the Description property of a safe data provider for a Visio Services application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------------EXAMPLE 1----------------------
```
PS C:\>Set-SPVisioSafeDataProvider -VisioServiceApplication "VGS1" -DataProviderID "SQLOLEDB" -DataProviderType 1 -Description "SQL OLEDB Driver!"
```

This example sets the description property of a safe data provider for a specific Visio Services application.


### -------------------EXAMPLE 2----------------------
```
PS C:\>Get-SPVisioServiceApplication -Identity "VGS1" | Set-SPVisioSafeDataProvider -DataProviderID "SQLOLEDB" -DataProviderType 1 -Description "SQL OLEDB Driver!"
```

This example sets the Description property of a safe data provider for a specific Visio Services application.
The result is piped from the `Set-SPVisioSafeDataProvider` cmdlet.


## PARAMETERS

### -DataProviderId
Specifies the name of the data provider to update.
The combination of DataProviderID and DataProviderType uniquely identifies a data provider for a Visio Services application.
The string that identifies the data provider can be a maximum of 255 alphanumeric characters.
Custom data types are supported; for example, Excel Services.

The type must be a valid string that identifies the data provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies the description of the safe data provider to set.

The type must be a string with a maximum of 4096 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VisioServiceApplication
Specifies the Visio Services application that contains the SPVisioSafeDataProvider object.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
