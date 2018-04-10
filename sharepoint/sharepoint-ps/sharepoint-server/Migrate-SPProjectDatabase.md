---
external help file: 
applicable: Project Server 2016
title: Migrate-SPProjectDatabase
schema: 2.0.0
---

# Migrate-SPProjectDatabase

## SYNOPSIS
Copies the data from the Project Server 2013 database into the corresponding SharePoint Server 2016 content database containing the migrated site collection.

## SYNTAX

```
Migrate-SPProjectDatabase [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] -DatabaseName <String>
 [-DatabaseServer <String>] [-FailoverPartner <String>] [-Overwrite] [-SQLLogon <PSCredential>]
 -SiteCollection <SPSitePipeBind> [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Copies the data from the Project Server 2013 database into the corresponding SharePoint Server 2016 content database containing the migrated site collection.

Both the Project Server 2013 database and the SharePoint Server 2016 database must be on the same instance of SQL
Server and the SharePoint farm account must have full access to the Project Server 2013 database. During the migration process the Project Server 2013 database will be modified and cannot be mounted back to a Project Server 2013.
## EXAMPLES

### Example 1 
```
PS C:\>Migrate-SPProjectDatabase -Name ProjectDB1 -SiteCollection "http://contoso1/sites/PWA"
```

This example will look for a Project Server 2013 database named ProjectDB1 on the same instance of SQL Server where the content database containing http://contoso1/sites/PWA is located. The data will be upgraded and copied into the site collection.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
The name of the Project Server 2013 database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
The name of the instance of SQL Server hosting the Project Server 2013 database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverPartner
The name of the SQL Server failover partner for the Project Server 2013 database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Overwrite
Specifies to overwrite any Project data from previous attempts.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SQLLogon
SQL Server authentication credentials if needed.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteCollection
The URL of the site collection to which you want to copy the Project data.

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: Project Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Project Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPSitePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

