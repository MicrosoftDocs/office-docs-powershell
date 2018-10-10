---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Upgrade-SPSingleSignOnDatabase
schema: 2.0.0
---

# Upgrade-SPSingleSignOnDatabase

## SYNOPSIS
Migrates the application definitions from Single Sign-On (SSO) database to Secure Store database as target applications.

## SYNTAX

```
Upgrade-SPSingleSignOnDatabase -SecureStoreConnectionString <String> -SecureStorePassphrase <SecureString>
 -SSOConnectionString <String> [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `Upgrade-SPSingleSignOnDatabase` cmdlet migrates the application definitions from SSO database to Secure Store database as target applications.
Use the `Upgrade-SPSingleSignOn` cmdlet to convert an SSO database to a Secure Store database.
SSO is a SharePoint Server feature.
SSO functionality is performed by the Secure Store Service in SharePoint Server.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------
```
PS C:\>Upgrade-SPSingleSignOnDatabase -SSOConnectionString "Data Source=oldServer;Database=SSO;Trusted_Connection=yes;" -SecureStoreConnectionString "Data Source=CONTOSO\SQLDatabase;Database=ContosoSSDatabase;Trusted_Connection=yes;" -SecureStorePassphrase "abcDEF123!@#"
```

This example migrates the SSO database at the SSO connection to a Secure Store database at the Secure Store connection.

## PARAMETERS

### -SecureStoreConnectionString
Specifies the SQL Server connection string for the Secure Store database.

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

### -SecureStorePassphrase
Specifies the passphrase used for the Secure Store database.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SSOConnectionString
Specifies the SQL Server connection string for the SSO database.

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
