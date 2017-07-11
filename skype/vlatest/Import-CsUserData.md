---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Import-CsUserData

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Imports user data previously exported using the Export-CsUserData cmdlet.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Imports user data previously exported by using the Export-CsUserData cmdlet.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Import-CsUserData -FileName <String> -Identity <String> [-ConfDirectoryFilter <String>]
 [-DomainController <Fqdn>] [-Force] [-LegacyFormat] [-RoutingGroupFilter <String>] [-UserFilter <String>]
 [<CommonParameters>]
```

### PoolFqdn
```
Import-CsUserData -FileName <String> -PoolFqdn <Fqdn> [-ConfDirectoryFilter <String>]
 [-DomainController <Fqdn>] [-Force] [-LegacyFormat] [-RoutingGroupFilter <String>] [-UserFilter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Import-CsUserData cmdlet is used to import previously-saved user data and/or conference directory data to a Lync Server.
Note that this data must have been exported by using the Export-CsUserData cmdlet.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Import-CsUserData"}

Lync Server Control Panel: The functions carried out by the Import-CsUserData cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Import-CsUserData cmdlet is used to import previously-saved user data and/or conference directory data to Skype for Business Server 2015.
Note that this data must have been exported by using the Export-CsUserData cmdlet.

Skype for Business Server Control Panel: The functions carried out by the Import-CsUserData cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 imports user data from a file named C:\Logs\ExportedUserData.zip to the pool atl-cs-001.litwareinc.com.

Import-CsUserData -PoolFqdn "atl-cs-001.litwareinc.com" -FileName "C:\Logs\ExportedUserData.zip"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 imports user data from a file named C:\Logs\ExportedUserData.zip to the pool atl-cs-001.litwareinc.com.

Import-CsUserData -PoolFqdn "atl-cs-001.litwareinc.com" -FileName "C:\Logs\ExportedUserData.zip"

## PARAMETERS

### -FileName
Full path to the input file containing the exported user data.
For example:

-InputFile "C:\Data\ExportedUsers.xml"

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
Service Identity of the user database where the data should be imported.
For example:

-Identity "UserDatabase:atl-sql-001.litwareinc.com"

You cannot use both the Identity and the PoolFqdn parameters in the same command.

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
Fully qualified domain name of the Registrar pool for the user data being imported.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"

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
When specified, allows you to import conference directory information for the specified conference directory.
For example, to import data from the conference directory with the ID 13 use this syntax:

-ConfDirectoryFilter 13

You can return conference directory IDs by using this command:

Get-CsConferenceDirectory

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
Below Content Applies To: Lync Server 2013

Enables administrators to specify the FQDN of the domain controller to be used when running Import-CsUserData.
If not specified, the cmdlet will use the first available domain controller.



Below Content Applies To: Skype for Business Server 2015

Enables administrators to specify the FQDN of the domain controller to be used when running the Import-CsUserData cmdlet.
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
Suppresses the display of any non-fatal error message that might arise when running the command.

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
Indicates that the data to be imported was exported from a previous version of Lync Server or Office Communications Server.

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

### -RoutingGroupFilter
Below Content Applies To: Lync Server 2013

Enables you to limit the imported data to users who belong to the same routing group.
Routing groups are used by Lync Server to determine the Front End server that users register with.



Below Content Applies To: Skype for Business Server 2015

Enables you to limit the imported data to users who belong to the same routing group.
Routing groups are used by Skype for Business Server 2015 to determine the Front End server that users register with.



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

### -UserFilter
Enables you to import user data for a single user.
To convert data for a specified user (and only for that user), set the UserFilter parameter to the SIP address of that user, being sure to omit the sip: prefix.
For example:

-UserFilter "kenmyer@litwareinc.com"

This parameter allows you to import data one user at a time.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Import-CsUserData does not accept pipelined input.

###  
None.
The Import-CsUserData cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.

## NOTES

## RELATED LINKS

[Convert-CsUserData]()

[Export-CsUserData]()

[Sync-CsUserData]()

[Update-CsUserData]()

[Online Version](http://technet.microsoft.com/EN-US/library/f39ef951-ee5b-4200-b6fb-68a4d4d6e86f(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f39ef951-ee5b-4200-b6fb-68a4d4d6e86f(OCS.16).aspx)

