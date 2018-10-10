---
external help file: 
applicable: SharePoint Server 2016, SharePoint Server 2019
title: Import-SPAccessServicesDatabase
schema: 2.0.0
---

# Import-SPAccessServicesDatabase

## SYNOPSIS
Imports an Access Services Database to a DACPAC via the Data-Tier Framework.

## SYNTAX

```
Import-SPAccessServicesDatabase [-AssignmentCollection <SPAssignmentCollection>] -Bacpac <Byte[]>
 -DatabaseName <String> -ServerReferenceId <Guid> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet exports an Access Services Database to a DACPAC. The cmdlet requires the Data-Tier Framework to be installed on the SharePoint server where the cmdlet is run. The Data-Tier Framework packages can be found at [Microsoft® SQL Server® Data-Tier Application Framework (17.4.1 GA DacFx)](https://www.microsoft.com/en-us/download/details.aspx?id=56508). Install the following MSI from the download:

EN\x86\DacFramework.msi

Note: The x86 package is required. The x64 package is not compatible with this cmdlet.

See more information about Data-Tier Framework at [Data-tier Applications](https://docs.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications).

## EXAMPLES

### Example 1 
```
PS C:\>$accessDb = Get-SPAccessServicesDatabaseServer -ServiceContext http://site_url -DatabaseServer SQLSERVERNAME -DatabaseServerGroup DEFAULT
PS C:\>Import-SPAccessServicesDatabase -DatabaseName accessDatabaseName -ServerReferenceId $accessDb.ServerReferenceId -Bacpac (Get-Content -Path C:\accessDb.bacpac -Encoding Byte)
```

This example gets the ServerReferenceId value of the SQL Server for the Access Services Service Application; -DatabaseServerGroup is set to the value DEFAULT by default. The next step is to import the bacpac file to a byte array and finally, import the Access Services Database as the specified SQL database name to the specified SQL Server.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Bacpac
A byte array of the bacpac file.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseName
The name of the database to create from the bacpac file.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServerReferenceId
The ServerReferenceId to be used for the Access Database.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
System.Guid
System.Byte[]
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

