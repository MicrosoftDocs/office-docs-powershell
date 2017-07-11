---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Debug-CsAddressBookReplication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Verifies replication between Active Directory and the Microsoft Lync Server 2013 Preview Address book service.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Verifies replication between Active Directory and the Skype for Business Server 2015 Address book service.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Debug-CsAddressBookReplication [-DomainController <String>] [-Force] [-OutLoggerVariable <String>]
 [-OutVerboseVariable <String>] [-PoolFqdn <Fqdn>] [-User <String>] [-VerifyNormalization] [-VerifyReplication]
 [-AnalyzeFailures] [-StartDate <DateTime>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Address Book servers are intermediaries between Active Directory Domain Services (AD DS) and Microsoft Lync Server.
The Address Book server ensures that the user information stored in Lync Server is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with information stored in the User database.

The Debug-CsAddressBookReplication cmdlet enables administrators to verify that data is being replicated between Active Directory and Lync Server.
Fully testing replication between Active Directory and the Address Book server can potentially be time-consuming and resource-intensive; because of that, it is recommended that Debug-CsAddressBookReplication only be used in troubleshooting scenarios.
If you want to periodically "spot check" the functioning of your Address Book server you should use the Test-CsAddressBookService and/or the Test-CsAddressBookWebQuery cmdlets instead.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Debug-CsAddressBookReplication"}

Lync Server Control Panel: The functions carried out by the Debug-CsAddressBookReplication cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

Address Book servers are intermediaries between Active Directory Domain Services (AD DS) and Microsoft Lync Server.
The Address Book server ensures that the user information stored in Lync Server is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with information stored in the User database.

The Debug-CsAddressBookReplication cmdlet enables administrators to verify that data is being replicated between Active Directory and Lync Server.
Fully testing replication between Active Directory and the Address Book server can potentially be time-consuming and resource-intensive; because of that, it is recommended that Debug-CsAddressBookReplication only be used in troubleshooting scenarios.
If you want to periodically "spot check" the functioning of your Address Book server you should use the Test-CsAddressBookService cmdlet and/or the Test-CsAddressBookWebQuery cmdlet instead.

Skype for Business Server Control Panel: The functions carried out by the Debug-CsAddressBookReplication cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies Address book replication for the current pool.
To verify replication for a specified pool, include the PoolFqdn parameter followed by the fully qualified domain name of the pool to be verified.

Debug-CsAddressBookReplication

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies Address book replication for the current pool.
To verify replication for a specified pool, include the PoolFqdn parameter followed by the fully qualified domain name of the pool to be verified.

Debug-CsAddressBookReplication

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the User parameter is included when verifying Address book replication for the current pool.
When the User parameter is included, additional related information is returned for the specified user.

Debug-CsAddressBookReplication -User "sip:kenmyer@litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the User parameter is included when verifying Address book replication for the current pool.
When the User parameter is included, additional related information is returned for the specified user.

Debug-CsAddressBookReplication -User "sip:kenmyer@litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 uses the VerifyReplication parameter to make a change to the specified user account and then verify that this change can be successfully replicated to the Address Book.

Debug-CsAddressBookReplication -User "sip:kenmyer@litwareinc.com" -VerifyReplication

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the VerifyReplication parameter to make a change to the specified user account and then verify that this change can be successfully replicated to the Address Book.

Debug-CsAddressBookReplication -User "sip:kenmyer@litwareinc.com" -VerifyReplication

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 uses the VerifyNormalization parameter to return information about user accounts where Address Book normalization rules could not be applied.

Debug-CsAddressBookReplication -VerifyNormalization

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 uses the VerifyNormalization parameter to return information about user accounts where Address Book normalization rules could not be applied.

Debug-CsAddressBookReplication -VerifyNormalization

## PARAMETERS

### -DomainController
Enables you to specify a domain controller to connect to when verifying Address book replication.
If this parameter is not included then the cmdlet will use the first available domain controller.

```yaml
Type: String
Parameter Sets: (All)
Aliases: DC
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

### -OutLoggerVariable
**Below Content Applies To:** Lync Server 2013

When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

-OutLoggerVariable TestOutput

Note: Do not prepend a $ character when specifying the variable name.

To save the information stored in the logger variable to an HTML file, use a command similar to this:

$TestOutput.ToHTML() \> C:\Logs\TestOutput.html

To save the information stored in the logger variable to an XML file, use a command similar to this:

$TestOutput.ToXML() \> C:\Logs\TestOutput.xml



**Below Content Applies To:** Skype for Business Server 2015

{{Fill OutLoggerVariable Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax

-OutVerboseVariable TestOutput

Do not prepend a $ character when specifying the variable name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
**Below Content Applies To:** Lync Server 2013

Fully qualified domain name of the pool being checked.
If this parameter is not included then Debug-CsAddressBookReplication will verify the current pool.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name of the pool being checked.
If this parameter is not included then the Debug-CsAddressBookReplication cmdlet will verify the current pool.



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

### -User
When included, returns detailed replication information for the specified user accounts.
The user account to be verified can be specified by using the user's SIP address, email address, or SamAccountName.

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

### -VerifyNormalization
**Below Content Applies To:** Lync Server 2013

If specified, detailed information will be returned for any user accounts where Address book normalization failed.
Normalization rules are used to convert phone numbers to the E.164 format used by Lync Server 2013 Preview.



**Below Content Applies To:** Skype for Business Server 2015

If specified, detailed information will be returned for any user accounts where Address book normalization failed.
Normalization rules are used to convert phone numbers to the E.164 format used by Skype for Business Server 2015.



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

### -VerifyReplication
**Below Content Applies To:** Lync Server 2013

When specified, Debug-CsAddressBookReplication will modify the specified user account in Active Directory and then verify that the changes are replicated to the Address book.
Note that the user account modification is for testing purposes only, and will not actually change the property values of that account.



**Below Content Applies To:** Skype for Business Server 2015

When specified, the Debug-CsAddressBookReplication cmdlet will modify the specified user account in Active Directory and then verify that the changes are replicated to the Address book.
Note that the user account modification is for testing purposes only, and will not actually change the property values of that account.



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

### -AnalyzeFailures
When included in a command, Debug-CsAddessBookReplication will return information about any SQL Server stored procedure errors (SprocExecuteErrors) associated with the Address Book.
The returned data includes information about which stored procedure failed; when the procedure failed; and how many times the procedure has failed.
Debug-CsAddressBookReplication will also return the SQL error code and provide the failed SQL statement.
Among other things, that enables you to rerun the statement from within the SQL debugger.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
Indicates the earliest activity date for the errors returned by the AnalyzeFailures parameter.
For example, if you set the start date to 3/1/2015 (Match 1, 2015, in U.S.
English) any errors prior to that date (for example, errors recorded on February 21, 2015) will be excluded from the returned data.

Use the date-time formats specified by your Regional and Language Options settings when assigning values to the StartDate parameter.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which address book replication is being verified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
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

###  
None.
Debug-CsAddressBookReplication does not accept pipelined input.

###  
None.
The Debug-CsAddressBookReplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
Debug-CsAddressBookReplication returns instances of the Microsoft.Rtc.SyntheticTransactions.Activities.Database.AddressBookReplicationTaskOutput object.

###  
The Debug-CsAddressBookReplication cmdlet returns instances of the Microsoft.Rtc.SyntheticTransactions.Activities.Database.AddressBookReplicationTaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsAddressBookService]()

[Test-CsAddressBookWebQuery]()

[Online Version](http://technet.microsoft.com/EN-US/library/c138f274-7a1f-4074-b6a2-548274af5199(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c138f274-7a1f-4074-b6a2-548274af5199(OCS.16).aspx)

