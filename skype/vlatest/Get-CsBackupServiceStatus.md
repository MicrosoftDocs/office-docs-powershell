---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsBackupServiceStatus

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Returns information about the current state of the backup service for a specified pool.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Returns information about the current state of the backup service for a specified pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Get-CsBackupServiceStatus -PoolFqdn <Fqdn> [-Category <BackupCategory>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Get-CsBackupServiceStatus cmdlet enables administrators to verify that the backup service for a specified Registrar pool has been configured and is working properly.
Note that, by default, only users who belong to the RTCUniversalServerAdmins group are allowed to run this cmdlet and check the backup status for a pool.
To provide additional groups with permission to run the cmdlet, use the Set-CsBackupServiceConfiguration cmdlet to add those groups to the AuthorizedUniversalGroups property.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsBackupServiceStatus"}

Lync Server Control Panel: The functions carried out by the Get-CsBackupServiceStatus cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Get-CsBackupServiceStatus cmdlet enables administrators to verify that the backup service for a specified Registrar pool has been configured and is working properly.
Note that, by default, only users who belong to the RTCUniversalServerAdmins group are allowed to run this cmdlet and check the backup status for a pool.
To provide additional groups with permission to run the cmdlet, use the Set-CsBackupServiceConfiguration cmdlet to add those groups to the AuthorizedUniversalGroups property.

Skype for Business Server Control Panel: The functions carried out by the Get-CsBackupServiceStatus cmdlet are not available in the Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The preceding command returns the backup service status for the pool atl-cs-001.litwareinc.com.

Get-CsBackupServiceStatus -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The preceding command returns the backup service status for the pool atl-cs-001.litwareinc.com.

Get-CsBackupServiceStatus -PoolFqdn "atl-cs-001.litwareinc.com"

## PARAMETERS

### -PoolFqdn
Fully qualified domain name of the pool whose backup service status is being checked.
For example:

-PoolFqdn "atl-cs-001.litwareinc.com"

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Category
Type of backup whose status is being checked.
Allowed values are:

* CMS
* UserData

If this parameter is not specified then both backup types will be checked.

```yaml
Type: BackupCategory
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsBackupServiceStatus does not accept pipelined input.

###  
None.
The Get-CsBackupServiceStatus cmdlet does not accept pipelined input.

## OUTPUTS

###  
Returns information about the backup service.

## NOTES

## RELATED LINKS

[Get-CsBackupServiceConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/7f56cc81-534c-48e8-9f74-5741d4534a83(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7f56cc81-534c-48e8-9f74-5741d4534a83(OCS.16).aspx)

