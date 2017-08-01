---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Debug-CsIntraPoolReplication

## SYNOPSIS
Verifies the synchronous replication of a pool by comparing the data stored for a specified user on a primary Front End server with data for that same user stored on replica Front End servers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### ConferenceDirectory
```
Debug-CsIntraPoolReplication [-ConferenceDirectory] <XdsGlobalRelativeIdentity> [-Force] [<CommonParameters>]
```

### User
```
Debug-CsIntraPoolReplication [-UserUri] <UserIdParameter> [-Force] [<CommonParameters>]
```

### PoolFqdn
```
Debug-CsIntraPoolReplication [-PoolFqdn] <XdsGlobalRelativeIdentity> [-Force] [-Service <String>] [-ShowAll]
 [-Type <ServiceEnumerationType>] [<CommonParameters>]
```

## DESCRIPTION
The Debug-CsIntraPoolReplication cmdlet provides a way for administrators to verify that replication is taking place between a primary Front End server and its replica Front End servers.
This can be done in one of two ways: 1) by verifying that the data for a specified user is identical on the Front End server and all its replica servers; or, 2) by verifying that the data for a conference directory is identical on the Front End server and all its replica servers.
To perform either of these two tasks, Debug-CsIntraPoolReplication first connects to the primary Front End server and constructs an XML file containing user or conference directory data.
The cmdlet then connects to the replica servers, constructs similar XML files, then verifies that selected content in the XML files is identical.

The Debug-CsIntraPoolReplication cmdlet verifies replication for a pool by taking one or more user accounts (or one conference directory) and querying a primary Front End server and all its replica Front End servers for data about that account (or conference directory).
The information retrieved from the primary Front End server and the replica servers is then compared: if the data matches, then it is assumed that intrapool replication is working as expected.

Note that this cmdlet can only be called using users or conference directories homed on Skype for Business Server.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Debug-CsIntraPoolReplication"}`

The functions carried out by the Debug-CsIntraPoolReplication cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Debug-CsIntraPoolReplication -UserUri "sip:kenmyer@litwareinc.com"
```

The command shown in Example 1 verifies replication on a Front End server by using the user with the SIP address "sip:kenmyer@litwareinc.com".

### -------------------------- Example 2 --------------------------
```
Get-CsUser -OU "OU=Redmond,dc=litwareinc,dc=com" | ForEach-Object {Debug-CsIntraPoolReplication $_.Identity}
```

In Example 2, replication is verified by using all the users who have user accounts in the Redmond OU.
To do this, the command first calls Get-CsUser along with the OU parameter; the parameter value "OU=Redmond,dc=litwareinc,dc=com" limits the returned data to user accounts found in the Redmond OU.
Those accounts are then piped to the ForEach-Object cmdlet which, in turn, uses Debug-CsIntraPoolReplication cmdlet to verify the replication status of each account in the OU.

### -------------------------- Example 3 --------------------------
```
"sip:kenmyer@litwareinc.com","sip:pilar@litwareinc.com" | ForEach-Object {Debug-CsIntraPoolReplication -UserUri $_}
```

The command shown in Example 3 verifies replication status by using a pair of user SIP addresses.
To perform this task, the two SIP addresses (enclosed in quotation marks and separated by using a comma) are piped to the ForEach-Object cmdlet, which then runs the Debug-CsIntraPoolReplication cmdlet against each SIP address..

### -------------------------- Example 4 --------------------------
```
Debug-CsIntraPoolReplication -ConferenceDirectory 13
```

In Example 4, replication is verified for the conference directory with the ID 13.

### -------------------------- Example 5 --------------------------
```
Get-CsUser -Filter {RegistrarPool -eq "atl-cs-001.litwareinc.com"} | Debug-CsIntraPoolReplication UserUri {$_.Identity}
```

Example 5 shows how you can verify replication for all the users homed on a specified Registrar pool.
To do this, the command first calls Get-CsUser along with the Filter parameter; the filter value {RegistrarPool -eq "atl-cs-001.litwareinc.com"} limits the returned data to user accounts homed on the Registrar pool atl-cs-001.litwareinc.com.
Those accounts are then piped to the Debug-CsIntraPoolReplication cmdlet, which verifies replication for each user in the pool.


## PARAMETERS

### -ConferenceDirectory
Enables you to verify the replication of a conference directory.
Conference directories should be specified using the directory Identity; conference directory Identities can be retrieved by using this command:

`Get-CsConferenceDirectory | Select-Object Identity, ServiceId`

You cannot use the ConferenceDirectory parameter and the UserUri parameter in the same command.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: ConferenceDirectory
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -UserUri
SIP address of the user account employed in testing intra-pool replication.
For example:

`-UserUri sip:kenmyer@litwareinc.com`

You cannot use the ConferenceDirectory parameter and the UserUri parameter in the same command.

```yaml
Type: UserIdParameter
Parameter Sets: User
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -PoolFqdn
Fully qualified domain name of the pool to be checked.
For example:

`-PoolFqdn "atl-cs-001.litwareinc.com"`

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: PoolFqdn
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Service
Enables you to specify a particular service to be verified.

```yaml
Type: String
Parameter Sets: PoolFqdn
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAll
When included in the command, shows information about all the services involved in replication.

```yaml
Type: SwitchParameter
Parameter Sets: PoolFqdn
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
Enables you to specify the type of replication to be verified.
Allowed values are:

- ConferenceDirectory
- Routing

```yaml
Type: ServiceEnumerationType
Parameter Sets: PoolFqdn
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
String or Microsoft.Rtc.Management.ADConnect.Schema.ADUser object.
Debug-CsIntraPoolReplication accepts a pipelined string value representing the SIP address or Active Directory display name of a user account that has been enabled for Lync Server.
The cmdlet also accepts pipelined instances of the Active Directory user object for a Lync Server-enabled user.

## OUTPUTS

###  
Debug-CsIntraPoolReplication returns instances of the Microsoft.Rtc.Management.UserPinservice.Data.syncReplicationDetails object.

## NOTES

## RELATED LINKS

[Get-CsManagementStoreReplicationStatus]()

[Test-CsReplica]()