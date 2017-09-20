---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Move-CsExUmContact
schema: 2.0.0
---

# Move-CsExUmContact

## SYNOPSIS

Moves one or more Exchange Unified Messaging (UM) contacts to a new Registrar pool.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Move-CsExUmContact [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm] [-DomainController <Fqdn>]
 [-Force] [-PassThru] [-ProxyPool <Fqdn>] [-WhatIf] [-IgnoreBackendStoreException] [<CommonParameters>]
```

### Identity
```
Move-CsExUmContact [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm] [-DomainController <Fqdn>]
 [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### Users
```
Move-CsExUmContact [-Target] <Fqdn> -UserList <String> [-ConcurrentMovesPerFE <Int32>] [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>]
 [-Report <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
The Move-CsExUmContact cmdlet provides a way for you to move an existing Exchange UM contact object to a new Registrar pool.

When an Exchange UM contact object is moved, the AutoAttendant and IsSubscriberAccess properties will be set appropriately based on the value of the OtherIpPhone property of the object.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Move-CsExUmContact -Identity "sip:exum1@fabrikam.com" -Target atl-cs-001.litwareinc.com
```

Example 1 moves the Exchange UM contact object with the SIP address exum1@fabrikam.com to the Registrar pool with the FQDN atl-cs-001.litwareinc.com.
Note that a confirmation prompt will be displayed when you run this command, even though we didn't include the Confirm parameter.
This prompt will appear even if you include the Force parameter.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Get-CsExUmContact | Where-Object {$_.AutoAttendant -eq $True} | Move-CsExUmContact -Target atl-cs-001.litwareinc.com

```

This example moves all Exchange UM contact objects that are Auto Attendants to the Registrar pool with the FQDN atl-cs-001.litwareinc.com.
The example begins with a call to the Get-CsExUmContact cmdlet, which retrieves all Exchange UM contacts that have been defined.
This collection of contacts is then piped to the Where-Object cmdlet, which finds all the contacts in the collection that have an AutoAttendant property value of True ($True), meaning the contact is an Auto Attendant.

Finally, the collection of contacts where AutoAttendant is True is piped to the Move-CsExUmContact cmdlet, which moves those contacts to the Registrar pool specified in the Target parameter.

As in Example 1, you will be prompted for confirmation when running this command.

## PARAMETERS

### -Identity
The unique identifier of the contact object you want to move.
Contact identities can be specified by using one of four formats: 1) the contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1); and, 4) the contact's Active Directory display name (for example, Team Auto Attendant).

```yaml
Type: UserIdParameter
Parameter Sets: (All), Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
The fully qualified domain name (FQDN) of the Registrar pool to which the contact is being moved.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-mcs-001) or its FQDN (for example, atl-mcs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a contact object through the pipeline that represents the contact account being moved.
By default, the Move-CsExUmContact cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool

This parameter is used only for hosted instances of Skype for Business Server.
It should not be used with an on-premises implementation of Skype for Business Server.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the contact despite those errors.

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

### -UserList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentMovesPerFE
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Identity, Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
String.
Accepts a pipelined string value representing the Identity of an Exchange UM object to be moved.

## OUTPUTS

###  
When called with the PassThru parameter, returns an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact.

## NOTES

## RELATED LINKS

[New-CsExUmContact]()

[Remove-CsExUmContact]()

[Set-CsExUmContact]()

[Get-CsExUmContact]()
