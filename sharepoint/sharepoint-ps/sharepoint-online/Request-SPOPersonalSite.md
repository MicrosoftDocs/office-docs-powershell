---
external help file: 
applicable: SharePoint Online
title: Request-SPOPersonalSite
schema: 2.0.0
---

# Request-SPOPersonalSite

## SYNOPSIS
Requests that one or more users be enqueued for a Personal Site to be created.


## SYNTAX

```
Request-SPOPersonalSite [-NoWait] -UserEmails <String[]> [<CommonParameters>]
```

## DESCRIPTION
The Request-SPOPersonalSite cmdlet requests that the users specified be enqueued so that a Personal Site be created for each. The actual Personal site is created by a Timer Job later.

**Note**: You must specify a string array of user logins that contains one or more valid user email (logins) and cannot contain any empty fields. The command will stop if it encounters any empty strings in the array. A maximum of 200 users can be specified.


## EXAMPLES

### ----------------------EXAMPLE 1-----------------------
```
$emails = “user1@contoso.com", "user2@contoso.com”
Request-SPOPersonalSite –UserEmails $emails -Verbose
```

This example requests that two users to be enqueued for the creation of a Personal Site and the status of the command will be displayed.
### ----------------------EXAMPLE 2-----------------------

```Request-SPOPersonalSite –UserEmails $emails -NoWait

```
This example requests that many users to be queued for the creation of a Personal Site. The users are previously defined using the variable $emails. The  status of the operation will not be displayed.

## PARAMETERS

### -NoWait
Continues without the status being polled. Polling the action can slow it’s progress if lots of user emails are specified.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserEmails
Specifies one or more user logins to be enqueued for the creation of a Personal Site. The Personal site is created by a Timer Job later. You can specify between 1 and 200 users.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
