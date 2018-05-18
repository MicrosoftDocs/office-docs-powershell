---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUserPoolInfo
schema: 2.0.0
---

# Get-CsUserPoolInfo

## SYNOPSIS
Returns information about the Registrar pool, backup Registrar pool, and User Services pool that a user has been assigned to.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsUserPoolInfo [-Identity] <UserIdParameter> [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION

When a user is enabled for Skype for Business Server, he or she must be homed on a Registrar pool.
This pool is responsible for authenticating the user and for keeping track of his or her current status and location.
If you need to know the Registrar pool that a user has been assigned to you can retrieve that information by using a command similar to this:

'Get-CsUser "Ken Myer" | Select-Object RegistrarPool'

In many cases, simply knowing a user's Registrar pool might be all the information you need.
In other cases, however, you might also want to know such things as the backup Registrar pool the user has been assigned to (that is, the pool to be used if the primary Registrar pool is unavailable); the names of the individual computers that make up these pools; and the User Services pool the user has been assigned to.
That type of detailed information can be returned by running the Get-CsUserPoolInfo cmdlet.

For Skype for Business Server, the Get-CsUserPoolInfo cmdlet has been modified to return information about a user's primary Front End servers in his or her primary pool and in his or her replica pool.
When a pool has multiple Front End servers, each user is assigned to a routing group which, in turn, is assigned to primary Front End server and a replica Front End server.
When a user logs on, by default he or she is registered with the primary Front End server; in the Get-CsUserPoolInfo output that server is listed as the PrimaryPoolPrimaryRegistrar.
If the user's primary pool has been failed over, then that user will be registered with the primary Front End server on the backup (replica) pool.
That server is listed in the output as the BackupPoolPrimaryRegistrar.

Note that replica information will be shown only if the user's primary pool has been assigned a backup pool.


## EXAMPLES


### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUserPoolInfo "sip:kenmyer@litwareinc.com"
```
This command returns user pool information for a single user: the user with the SIP address sip:kenmyer@litwareinc.com.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser | Get-CsUserPoolInfo
```

In Example 2, user pool information is returned for all the users who have been enabled for Skype for Business Server 2015.
To carry out this task, the command first calls the Get-CsUser cmdlet without any parameters in order to return a collection of all the Skype for Business Server 2015-enabled users.
This collection is then piped to the Get-CsUserPoolInfo cmdlet, which displays pool information for each user in the collection.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser | Where-Object {$_.RegistrarPool -ne $Null} | Get-CsUserPoolInfo
```

The command shown in Example 3 is a variation of the command used in Example 2.
In Example 2, pool information is returned for all the users who have been enabled for Skype for Business Server 2015.
However, it is possible to have users who have been enabled for Skype for Business Server 2015 but have not been assigned a Registrar pool.
The command shown in Example 2 displays an error message for each user who meets those criteria; those error messages are suppressed in Example 3.

To suppress the error message, Example 3 again uses the Get-CsUser cmdlet to return a collection of all the Skype for Business Server-enabled users.
This time, however, the collection is piped to the Where-Object cmdlet, which picks out only users where the RegistrarPool property is not equal to a null value.
(In other words, users who have been assigned a Registrar pool.) That filtered collection is then piped to the Get-CsUserPoolInfo cmdlet, which displays pool information for each user in the filtered collection.

### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser -Filter {RegistrarPool -eq "redmond-cs-001.litwareinc.com"} | Get-CsUserPoolInfo
```

In Example 4, pool information is displayed for all the users who have been assigned the primary pool redmond-cs-001.litwareinc.com.
To do this, the Get-CsUser cmdlet is called along with the Filter parameter; the filter value {RegistrarPool -eq "redmond-cs-001.litwareinc.com"} returns only those users where the fully qualified domain name of the RegistrarPool property is equal to redmond-cs-001.litwareinc.com.
That collection is then piped to the Get-CsUserPoolInfo cmdlet, which retrieves pool information for each user in the collection.


### -------------------------- EXAMPLE -------------------------- 
```
Get-CsUser | Get-CsUserPoolInfo | Where-Object {$_.BackupPoolFqdn -eq $Null}
```

The command shown in Example 5 returns pool information for all the users who have not been assigned a backup Registrar pool.
To carry out this task, the command first calls the Get-CsUser cmdlet to return a collection of all the users who have been enabled for Skype for Business Server 2015.
That information is then piped to the Get-CsUserPoolInfo cmdlet, which retrieves pool information for each user in the collection.
Finally, that pool information is piped to the Where-Object cmdlet, which displays data only for those users where the BackupPoolFqdn property is equal to a null value.

### -------------------------- Example ------------------------ (Lync Server 2010)
```
Get-CsUserPoolInfo "Ken Myer" | Select-Object -Expand PrimaryPoolMachinesInPreferredOrder
```

In Example 6, information is reported about the individual computers that make up Ken Myer's Registrar pool.
To retrieve this information, Get-CsUserPoolInfo is first called in order to return the relevant data for Ken Myer's user account.
This data is then piped to the Select-Object cmdlet.
Select-Object uses the Expand parameter to "expand" information stored in the PrimaryPoolMachinesInPreferredOrder property.
Expanding a property means that all of the values stored in that property are displayed onscreen in easy-to-read format.

## PARAMETERS

### -Identity
Indicates the Identity of the user whose user pool information is to be retrieved.
Identities can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory Domain Services display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the user Identity.
For example, the Identity "* Smith" returns information for users who have a last name that ends with the string value " Smith".



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LocalStore
Retrieves the user pool information from the local replica of the Central Management store rather than from the Central Management store itself.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
The Get-CsUserPoolInfo cmdlet accepts a pipelined string value representing the SamAccountName of a user account that has been enabled for Skype for Business Server 2015.
The cmdlet also accepts pipelined instances of the Active Directory user object.

## OUTPUTS

###   
The Get-CsUserPoolInfo cmdlet returns instances of the Microsoft.Rtc.Management.Xds.GetOCsUserPoolInfoCmdlet+UserInformation object.

## NOTES

## RELATED LINKS


