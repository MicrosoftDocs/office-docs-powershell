---
external help file: 
applicable: SharePoint Server 2016
title: Export-SPAccessServicesDatabase
schema: 2.0.0
---

# Export-SPAccessServicesDatabase

## SYNOPSIS
Exports an Access Services Database to a DACPAC via the Data-Tier Framework.

## SYNTAX

```
Export-SPAccessServicesDatabase [-AssignmentCollection <SPAssignmentCollection>] -DatabaseName <String>
 -ServerReferenceId <Guid> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet exporst an Access Services Database to a DACPAC. The cmdlet requires the Access Services database to reside on a SQL Server 2012 server in order to function. The cmdlet also requires the Data-Tier Framework to be installed on the SharePoint server where the cmdlet is run. The Data-Tier Framework packages can be found at [Microsoft® SQL Server® 2012 Data-Tier Application Framework (March 2013)](https://www.microsoft.com/en-us/download/details.aspx?id=36842). Install the following MSIs from the download:

ENU\x64\DACFramework.msi

ENU\x64\SqlDom.msi

ENU\x64\SQLSysClrTypes.msi

See more information about Data-Tier Framework at [Data-tier Applications](https://docs.microsoft.com/en-us/sql/relational-databases/data-tier-applications/data-tier-applications).

## EXAMPLES

### Example 1 
```
PS C:\>$contentdb = Get-SPContentDatabase ContentDbName
PS C:\>$accessDb = Get-SPAccessServicesDatabase -ContentDb $contentdb -EA 0 | Select -First 1
PS C:\>[byte[]]$dacPacBytes = Export-SPAccessServicesDatabase -DatabaseName $accessDb.DatabaseName -ServerReferenceId $accessDb.ServerReferenceId
PS C:\>[IO.File]::WriteAllBytes('C:\accessDb.bacpac', $dacPacBytes)
```

This cmdlet retrieves the first Access Database from the specified Content Database and exports the Access Database to a BACPAC. This BACPAC file can then be imported via SQL Server Management Studio to restore the Access Database.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatabaseName
The name of the Access Database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServerReferenceId
The ServerReferenceId used for the Access Database.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

