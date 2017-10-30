---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Export-CsUserData
schema: 2.0.0
---

# Export-CsUserData

## SYNOPSIS
Exports user data in a format that can be imported into Skype for Business Server 2015.
The data will be exported as a .ZIP file containing a pair of XML documents.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Export-CsUserData -FileName <String> -Identity <String> [-ConfDirectoryFilter <String>]
 [-DomainController <Fqdn>] [-Force] [-LegacyFormat] [-UserFilter <String>] [-UserFileFilter <String>]
 [<CommonParameters>]
```

### PoolFqdn
```
Export-CsUserData -FileName <String> -PoolFqdn <Fqdn> [-ConfDirectoryFilter <String>]
 [-DomainController <Fqdn>] [-Force] [-LegacyFormat] [-UserFilter <String>] [-UserFileFilter <String>]
 [<CommonParameters>]
```

### SqlInstance
```
Export-CsUserData -FileName <String> -SqlInstanceName <String> [-ConfDirectoryFilter <String>]
 [-DbName <String>] [-DomainController <Fqdn>] [-Force] [-LegacyFormat] [-UserFileFilter <String>]
 [-UserFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
The Export-CsUserData cmdlet provides a way for administrators to export user data and/or conference directory for a Skype for Business Server pool.
That data, which can be saved in the user data format used by Skype for Business Server can then be imported by using the Import-CsUserData cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Export-CsUserData"}`

The functions carried out by the Export-CsUserData cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Export-CsUserData -PoolFqdn "atl-cs-001.litwareinc.com" -FileName "C:\Logs\ExportedUserData.zip"
```

The command shown in Example 1 exports user data from the pool atl-cs-001.litwareinc.com to a file named C:\Logs\ExportedUserData.zip.


## PARAMETERS

### -FileName
Full path to the .ZIP file that the Export-CsUserData cmdlet will create; this file will contain the exported user data.
For example:

`-FileName "C:\Logs\ExportedData.zip"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Fully qualified domain name of the pool where the User database containing the user data to be exported is installed.
For example:

`-Identity "atl-sql-001.litwareinc.com"`

Note that you can retrieve fully qualified domain names for your User database pools by running this command:

`Get-CsService -UserDatabase`

```yaml
Type: String
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the Registrar pool containing the user data to be exported.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: Fqdn
Parameter Sets: PoolFqdn
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfDirectoryFilter
When specified, allows you to export conference directory information for the specified conference directory.
For example, to export data from the conference directory with the ID 13 use this syntax:

`-ConfDirectoryFilter 13`

You can return conference directory IDs by using this command:

`Get-CsConferenceDirectory`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables administrators to specify the FQDN of the domain controller to be used when running the Export-CsUserData cmdlet.
If not specified, the cmdlet will use the first available domain controller.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyFormat
When specified, data is saved in the format used by Microsoft Lync Server 2010.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFilter
Enables you to export data for a single user.
That user is in dictated by specifying his or her SIP address, minus the sip: prefix.
For example:

`-UserFilter "kenmyer@litwareinc.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlInstanceName
Name of the SQL Server instance containing the user data to be exported.
For example:

`-SqlInstanceName "rtc"`

```yaml
Type: String
Parameter Sets: SqlInstance
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DbName
Name of the SQL Server database containing the user data to be exported.

```yaml
Type: String
Parameter Sets: SqlInstance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFileFilter
Full path to a text file containing a list of user URIs for whom data should be exported.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

###  
The Export-CsUserData cmdlet creates new .ZIP files.


## NOTES

## RELATED LINKS

[Convert-CsUserData](Convert-CsUserData.md)

[Import-CsUserData](Import-CsUserData.md)

[Sync-CsUserData](Sync-CsUserData.md)

[Update-CsUserData](Update-CsUserData.md)
