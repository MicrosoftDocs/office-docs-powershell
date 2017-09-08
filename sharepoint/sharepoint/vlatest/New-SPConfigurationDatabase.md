---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# New-SPConfigurationDatabase

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
New-SPConfigurationDatabase [-DatabaseName] <String> [-DatabaseServer] <String> [[-DirectoryDomain] <String>]
 [[-DirectoryOrganizationUnit] <String>] [[-AdministrationContentDatabaseName] <String>]
 [[-DatabaseCredentials] <PSCredential>] [-FarmCredentials] <PSCredential> [-Passphrase] <SecureString>
 [-SkipRegisterAsDistributedCacheHost] [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseFailOverServer <String>] [-LocalServerRole <SPServerRole>] [-ServerRoleOptional]
```

## DESCRIPTION
The New-SPConfigurationDatabase cmdlet creates a new configuration database on the specified database server.
This is the central database for a new SharePoint farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>New-SPConfigurationDatabase -DatabaseName "SharePointConfigDB1" -DatabaseServer "SQL-01" -Passphrase (ConvertTo-SecureString "MyPassword" -AsPlainText -force) -FarmCredentials (Get-Credential)
```

This example prompts the user to provide user credentials for the default Farm Administrator account.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>New-SPConfigurationDatabase -DatabaseName "SharePointConfigDB1" -DatabaseServer "SQL-01" -Passphrase (ConvertTo-SecureString "MyPassword" -AsPlainText -force) -FarmCredentials (Get-Credential)
```

This example prompts the user to provide user credentials for the default Farm Administrator account.

## PARAMETERS

### -DatabaseName
Specifies the name of the new configuration database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the database server on which to create the configuration database.
If no value is specified, the default value is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DirectoryDomain
Specifies the directory domain for the new farm.
If no domain is specified, the domain in which the local computer is located is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 3
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DirectoryOrganizationUnit
Specifies the directory organizational unit for the new configuration database.
If no organizational unit is specified, the organizational unit in which the local computer is located is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AdministrationContentDatabaseName
Specifies the name for the Central Administration content database for the new farm.
If no name is specified, a default name is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 5
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -DatabaseCredentials
Specifies the Credential object for the database user.
Use this parameter if you use SQL Server Authentication.
If no database credentials are provided, Windows authentication is used.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: 6
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -FarmCredentials
Specifies credentials for the Farm Administrator account.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: True
Position: 7
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Passphrase
Specifies the secure password phrase for the new farm.
This passphrase is used to join other machines to this farm.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 

Required: True
Position: 8
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -SkipRegisterAsDistributedCacheHost
By default all the servers in the farm are registered as a cache host (that is, DistributedCacheService is running by default).

Use this parameter to not register the server computer as a distributed cache host.
If you want to have a dedicated cache host, then use this parameter to make sure that caching service is not installed on the computer.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: 9
Default value: False
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

### -DatabaseFailOverServer
{{Fill DatabaseFailOverServer Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LocalServerRole
{{Fill LocalServerRole Description}}

```yaml
Type: SPServerRole
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerRoleOptional
{{Fill ServerRoleOptional Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

