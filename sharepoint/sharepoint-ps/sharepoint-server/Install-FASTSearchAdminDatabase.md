---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Install-FASTSearchAdminDatabase
---

# Install-FASTSearchAdminDatabase

## SYNOPSIS
Installs the database used by the Microsoft FAST Search Server 2010 for SharePoint administration services.

## SYNTAX

```
Install-FASTSearchAdminDatabase [-DbConnection <String>] [-DbName <String>] [-DbServer <String>] [-Force]
 [-Upgrade <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet installs the database used by the FAST Search Server 2010 for SharePoint administration services.
This cmdlet is primarily called during installation, by the FAST Search Server 2010 for SharePoint installer.

The administration database default name is "FASTSearchAdminDatabase" and should be located in the Microsoft SQL Server instance specified by the DbServer or DbConnection parameters.

In addition to performing an initial installation of the database schema, this cmdlet can also:

-- Reinstall (destructively) the database schema if it already exists.
-- Upgrade the database schema from an earlier version.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Install-FASTSearchAdminDatabase -DbConnection "Data Source=sqlserver.contoso.com;Database=FASTSearchAdminDatabase;integrated Security=True;"
```

This example installs the database schema in the database server specified by the connection string.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Install-FASTSearchAdminDatabase -Upgrade -DbServer "sqlserver.contoso.com"
```

This example upgrades the database schema already installed in the FAST Search Server 2010 for SharePoint administration database on the given SQL Server instance.

### ---------------EXAMPLE 3----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Install-FASTSearchAdminDatabase -Force -DbServer "sqlserver.contoso.com"
```

This example deletes and reinstalls the database schema already installed in the FAST Search Server 2010 for SharePoint administration database on the given SQL Server instance.

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
Specifies the database server instance that contains the FAST Search Server 2010 for SharePoint administration database.

Only one of the DbServer and DbConnection parameters must be specified.
Using DbServer with a value of sqlserver.contoso.com is equivalent to using DbConnection with the value "Data Source=sqlserver.contoso.com;Database=FASTSearchAdminDatabase;integrated Security=True"

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

### -Force
The Force parameter specifies that the FAST Search Server 2010 for SharePoint administration database already exists, but should be reinstalled.

This will delete all data that already exists in the database.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Upgrade
Specifies that the FAST Search Server 2010 for SharePoint administration database already exists and that it should be upgraded, because it uses an older version of the database schema.

The upgrade process will attempt to migrate all data to the new database schema.

It is strongly recommended that you back up the database before performing this operation.

```yaml
Type: Boolean
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

[Uninstall-FASTSearchAdminDatabase](Uninstall-FASTSearchAdminDatabase.md)

