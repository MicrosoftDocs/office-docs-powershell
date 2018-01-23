---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Uninstall-FASTSearchAdminDatabase
---

# Uninstall-FASTSearchAdminDatabase

## SYNOPSIS
Uninstalls the database used by the Microsoft FAST Search Server 2010 for SharePoint administration services.
This cmdlet is primarily called during uninstallation by the FAST Search Server 2010 for SharePoint installer.

## SYNTAX

```
Uninstall-FASTSearchAdminDatabase [-DbConnection <String>] [-DbName <String>] [-DbServer <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet uninstalls the database used by the FAST Search Server 2010 for SharePoint administration services.
All data is deleted.
This cmdlet is primarily called during uninstallation, by the FAST Search Server 2010 for SharePoint installer.

The administration database default name is "FASTSearchAdminDatabase" and is located in the Microsoft SQL Server instance specified by the DbServer or DbConnection parameters.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Uninstall-FASTSearchAdminDatabase -DbServer=sqlserver.contoso.com
```

This example uninstalls the FAST Search Server 2010 for SharePoint administration database on the given SQL Server instance.
All data will be deleted.

## PARAMETERS

### -DbConnection
Specifies the database connection string for the FAST Search Server 2010 for SharePoint administration database, in the same format as the ConnectionString property of the System.Data.SqlClient.SqlConnection .NET Framework type.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DbName
Specifies the name of the FAST Search Server 2010 for SharePoint administration database.

The name only takes effect when used in conjunction with the DbServer parameter, not the DbConnection parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DbServer
Specifies the database server instance that contains the FAST Search Server 2010 for SharePoint administration database

Only one of the DbServer and DbConnection parameters must be specified.
Using DbServer with a value of sqlserver.contoso.com is equivalent to using DbConnection with the value "Data Source=sqlserver.contoso.com;Database=FASTSearchAdminDatabase;integrated Security=True""

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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

[Install-FASTSearchAdminDatabase](Install-FASTSearchAdminDatabase.md)

